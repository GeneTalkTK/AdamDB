###########################################################################
# Class to capsule data line in a VCF file
#
# Based on VcfTools
#

class VcfLine
  # just for debug purposes!
  attr_reader :data
  attr_reader :cov_ab
  
 ###########################################################################
  def self.is_comment( line )
     return line =~ /^##/
  end

  ###########################################################################
  def self.is_data( line )
     return line !~ /^#/
  end

  ###########################################################################
  def initialize( line )
    @data = VcfTools::parse_vcf_line( line ) if line.present?
    @cov_ab = []
    @infohash = nil
  end

  ###########################################################################
  # Accessors to data in the VCF line  
  def chrom
    @data[:chrom]
  end

  def pos
    @data[:pos]
  end  

  def id
    @data[:id]
  end

  def ident
    @data[:id]
  end
  
  def ref
    @data[:ref]
  end
  
  def alt
    @data[:alt]
  end

  def qual
    @data[:qual]
  end
  
  def filter
    @data[:filter]
  end
  
  def info
    @data[:info]
  end
  
  def format
    @data[:format]
  end
  
  def sample( idx )
    @data[:samples][idx] if @data[:samples]
  end

  ###########################################################################
  # First and second allele A1/A2 (alphabetically ordered) and alt allele   
  def first_allele( idx )
    @data[:samples][idx][:_][:al][0]
  end

  def second_allele( idx )
    @data[:samples][idx][:_][:al][1]
  end

  def alt_allele( idx )
    @data[:samples][idx][:_][:aa]
  end
  
  #============================================================================
  # Get data from info column

  ###########################################################################
  def func()
    return VcfTools.func( info() )
  end

  ###########################################################################
  def hgvs()
    return VcfTools.hgvs( info() )
  end

  ###########################################################################
  # Get number, coverage and allelic balance (num, cov, ab) for sample idx
  def coverage( idx )
    if @cov_ab[ idx ] == nil
       @cov_ab[ idx ] = VcfTools.get_coverage( @data[:info], @data[:samples][idx] )
    end
    return @cov_ab[ idx ]
  end

  ###########################################################################
  # Get gene names from HGVS data
  def genes()
    return nil if @data[:info].blank?
    return nil if @data[:info][:hgvs].blank?
    VcfTools.get_genes_from_hgvs( @data[:info][:hgvs] )
  end

#============================================================================


  ###########################################################################
  # get allele counter from redis hash

  def allele_count_from_hash( idx, frf )
    first      = @data[:samples][idx][:_][:al][0]
    sec        = @data[:samples][idx][:_][:al][1]

    freq = 0
    if first != '.'
      if !frf.empty? then
        if first.length == 1 && sec.length == 1
          freq = frf[first + sec].to_i
        else
          if first == sec
            freq = frf[@data[:ref] + 'H' + first].to_i
          else
            freq = frf["#{@data[:ref]}/#{first}/#{sec}"].to_i
          end
        end
      end
    end
    return freq
  end

  ###########################################################################
  # Get number, coverage and allelic balance (num, cov, ab) for sample idx
  def coverage( idx )
    if @cov_ab[ idx ] == nil
       @cov_ab[ idx ] = VcfTools.get_coverage( @data[:info], @data[:samples][idx] )
    end
    return @cov_ab[ idx ]
  end

  ###########################################################################
  # Get gene names from HGVS data
  def genes()
    return nil if @data[:info].blank?
    return nil if @data[:info][:hgvs].blank?
    VcfTools.get_genes_from_hgvs( @data[:info][:hgvs] )
  end

  ###########################################################################
  # convert to JSON
  def to_json
    d = data.dup
    d.delete( :filter )
    d.delete( :format )
    return d.to_json
  end

  ###########################################################################
  # convert to JSON
  def to_compact
    d=[]
    d[ VcfTools::GTDATA_CHRPOS  ] = "#{@data[:chrom]}:#{@data[:pos]}"
    d[ VcfTools::GTDATA_IDENT   ] = @data[:id]
    d[ VcfTools::GTDATA_GENES   ] = genes()
    d[ VcfTools::GTDATA_REF     ] = @data[:ref].upcase
    d[ VcfTools::GTDATA_NUM     ] = coverage(0)[0]
    d[ VcfTools::GTDATA_COV     ] = coverage(0)[1]
    d[ VcfTools::GTDATA_AB      ] = coverage(0)[2]
    d[ VcfTools::GTDATA_EFF     ] = @data[:info].has_key?(:effect) ? @data[:info][:effect] : ''
    d[ VcfTools::GTDATA_HGVS    ] = @data[:info].has_key?(:hgvs) ? @data[:info][:hgvs] : ''
    d[ VcfTools::GTDATA_FREQ    ] = 42.33
    d[ VcfTools::GTDATA_SAMPLES ] = @data[:samples]
    d[ VcfTools::GTDATA_ANNO    ] = "foo"
    return d
  end

  ###########################################################################
  # Iterate over each sample  
  def each_sample( &block )
    @data[:samples].each do |sample|
      block.call( sample )
    end
  end                  

  ###########################################################################
  # Iterate over each sample  
  def each_sample_with_index( &block )
    @data[:samples].each_with_index do |sample, i|
      block.call( sample,i )
    end
  end                  

end

__END__

VcfLine Object:


--- !ruby/object:VcfLine 
cov_ab: []

data: 
  :filter: PASS
  :samples: 
  - :ad: 
    - 94
    - 482
    :nl: 20
    :sb: 
    - -100
    - "0000"
    :vf: 
    - 0
    - 8368
    :_: 
      :aa: C
      :idx: 
      - 0
      - 1
      :al: 
      - CT
      - C
    :gqx: 100
    :gt: 0/1
    :gq: 100
  :pos: 89623860
  :alt: 
  - CT
  - C
  :qual: 
  - 100
  - "00"
  :format: 
  - GT
  - GQ
  - AD
  - VF
  - NL
  - SB
  - GQX
  :info: 
    :exon: 
    :dp: "576"
    :ti: NM_000314
    :gi: PTEN
    :effect: UTR5
    :fc: Noncoding
    :hgvs: PTEN(NM_000314:c.-366del-)
  :ref: CT
  :id: rs71022512
  :chrom: 10
infohash: 
=> nil
