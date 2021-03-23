namespace 'vcf' do
# require 'rake'

###########################################################################
task :populate => :environment do
    Dir.glob( "#{Rails.root}/DATA/VCF/*.vcf") do |file|
      $stderr.puts "Importing #{file}"
      s = Sample.create( name: file )
      import_file( file, s )
    end

end

###########################################################################
# Import a VCF file into a user account, start preprocessing
desc "Import VCF file, usage: rake vcf:import[bla.vcf,2] (no blanks!)"
task :import, [:vcf_file, :uid] => :environment do |t, args|
puts args.vcf_file
# puts , [:vcf_file, :uid] => :environment do |t, args|
end
#inpfile = open( inputfilename )
#inpfile.each do |line|
#line.chomp!


task :foo => :environment do
    ARGV.each { |a| task a.to_sym do ; end }
    puts ARGV[1].class.name + '  ' + ARGV[2].class.name + '**'
    puts ARGV[1] + '  ' + ARGV[2] + '**'
  end

###########################################################################
def import_file( file, id )
    VcfFile.new( file ).each_data_line do |line|
        v = Variant.create( sample: id,
                chrom:  line.chrom,
                start:  line.pos,
                ende:   line.pos,
                rsident:line.id,
                ref:    line.ref,
                allele: line.alt_allele( 0 ),
                func:   line.func,
                cov_num: line.coverage(0)[0],
                cov:    line.coverage(0)[1],
                cov_ab: line.coverage(0)[2],
                hgvs:   line.hgvs ? line.hgvs.truncate(255) : '',
                sample_data: line.sample(0) ? line.sample(0).to_json.to_s.truncate(255) : '',
                pnv:    rand()
        )
    end
end

###########################################################################
end
