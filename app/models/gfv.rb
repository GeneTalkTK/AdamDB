###########################################################################
# Interface to redis database
#   
# Chrom -> Database
# Pos -> Key in database
#
# Hashtags:
# 'aa','ac','ag','at','cc','cg','ct','gg','gt','tt': Genotype frequencies
# c: Genotype counter
# r: Reference
# a: Annotations (string with author ids, ',' separated)
#    p: dbsnp precious PM
#    q: dbsnp precious PMC
# g: Genes ',' separated
# 
# eg: Experts on geneset (string with my_gene_set_ids, ',' separated) DEPRECATED?
#
# f: flags, see model position_flags
#


class Gfv
  require "redis"

  DBMAX = 5
  TYPES = ['AA','AC','AG','AT','CC','CG','CT','GG','GT','TT']
  PWD = '63n3t@1k-r3d15-d8'
  PORT = 6374
   
  ###########################################################################
  def initialize
    @redis = []
    @redis_db = []
  end     

  ###########################################################################
  def close
  end     

  ###########################################################################
  def access( chrom, pos )
     c = chrom.to_i
     idx = case c
            when 1      then 0
            when 2      then 1
            when 3..7   then 2
            when 8..12  then 3
            when 13..18 then 4
            when 19..26 then 5
     end

     db = case c
            when 1      then 0
            when 2      then 0
            when 3..7   then c-3
            when 8..12  then c-8
            when 13..18 then c-13
            when 19..26 then c-19
     end

     if @redis_db[ idx ] != db
        switch_db( idx, db )
     end

     # @redis[ idx ] = Redis.connect(:host => 'localhost', :port => 6374 + idx)
     # @redis[ idx ].auth('63n3t@1k-r3d15-d8')
     
     return @redis[ idx ]
  end

  ###########################################################################
  def self.get_portidx_db( chrom, pos )
     c = chrom.to_i
     idx = case c
            when 1      then 0
            when 2      then 1
            when 3..7   then 2
            when 8..12  then 3
            when 13..18 then 4
            when 19..26 then 5
     end

     db = case c
            when 1      then 0
            when 2      then 0
            when 3..7   then c-3
            when 8..12  then c-8
            when 13..18 then c-13
            when 19..26 then c-19
     end

     return idx, db
  end

  ###########################################################################
  def get_vector( chrom, pos )
     return {"GG"=>"38608", "f"=>"141", "g"=>"26589", "r"=>"A", "c"=>"43692", "AG"=>"2540", "AA"=>"2434"}
  end

  ###########################################################################
  def set_vector( chrom, pos, kv_hash )
    File.open("#{Rails.root}/log/redis_mock", 'a') do |f|
      f.puts Time::now
      f.puts "#{chrom}:#{pos} -> #{kv_hash.inspect}"
    end
  end

  ###########################################################################
  # set genotype frequencies
  # assume values in an array; sequence @TYPES
  
  def set_frequencies( chrom, pos, values )
    sum = values.inject(0){ |sum,v| sum += v.to_i }    # values.map{ |v| v.to_i }.inject(0, :+)
    vec = get_vector( chrom, pos )
    h = Hash[ *TYPES.zip( values ).flatten ]
    h.delete_if { |k,v| v.to_i == 0 && ( vec[k].blank? || vec[k] == 0 ) }
    h['c'] = sum.to_s
    set_vector( chrom, pos, h )    
  end
  
  ###########################################################################
  def get( chrom, pos, attr )
     h = {"GG"=>"38608", "f"=>"141", "g"=>"26589", "r"=>"A", "c"=>"43692", "AG"=>"2540", "AA"=>"2434"}
     return h[ attr ]
  end

  ###########################################################################
  def set( chrom, pos, attr, value )
    File.open("#{Rails.root}/log/redis_mock", 'a') do |f|
      f.puts Time::now
      f.puts "#{chrom}:#{pos} #{attr} -> #{value.inspect}"
    end
  end

  ###########################################################################
  def incr( chrom, pos, attr, value=1 )
    File.open("#{Rails.root}/log/redis_mock", 'a') do |f|
      f.puts Time::now
      f.puts "#{chrom}:#{pos} #{attr} +-> #{value.inspect}"
    end
  end

  ###########################################################################
  def set_range( chrom, start, ende, attrib, value )
    start.upto( ende ) do | p |
      str_orig = get( chrom, p, attrib )
      if ( str_orig.blank? )
         set( chrom, p, attrib, value.to_s )
      elsif ( ! str_orig.split(',').include?( value.to_s ) )
         set( chrom, p, attrib, "#{str_orig},#{value}" )
      end
    end
  end

  ###########################################################################
  def each_target_collection( chrom, pos, &block )
    tcs = get( chrom, pos, 'g')
    return if tcs.blank?
    tcs.split(',').each do |g|
      tc = TargetCollection.find_by_id( g.to_i )
      block.call( tc ) unless tc == nil
    end
  end

  ###########################################################################
  def print_flags( chrom, pos )
     PositionFlag.print_flags( get( chrom, pos, 'f' ) )
  end 
   
###########################################################################
private
###########################################################################

  ###########################################################################
  def switch_db( idx, db ) 
     @redis_db[ idx ] = db
     begin
        @redis[ idx ].select( @redis_db[ idx ] )                                                                                                                 
     rescue => e
        if e.message == 'ERR operation not permitted'
           if ! defined? @second_try 
             @second_try = true
             @redis[ idx ] = Redis.connect(:host => 'localhost', :port => 6374 + idx)
             @redis[ idx ].auth('63n3t@1k-r3d15-d8')
             # initialize
             retry
           end
        end
     end
  end
  
       
# class
end                                 

