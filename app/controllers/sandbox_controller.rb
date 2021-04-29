class SandboxController < ApplicationController
  def index
  end

  def img
    pp params.to_yaml
    filename = File.basename(params[:photo][:picture].original_filename )
    File.open( "#{Rails.root}/DATA/upload/#{filename}", "wb") { |f| f.write(params[:photo][:picture].tempfile.read) }
  end

  def vcf
    #data = {}
    #variants = []
    #VcfFile.new( "#{Rails.root}/DATA/FritzExomeWithMelanoma_VEP.vcf" ).each_data_line do |line|
    #  v = Variant.create( sample: id,
    #          chrom:  line.chrom,
    #          start:  line.pos,
    #          ende:   line.pos,
    #          rsident:line.id,
    #          ref:    line.ref,
    #          allele: line.alt_allele( 0 ),
    #          func:   line.func,
    #          cov_num: line.coverage(0)[0],
    #          cov:    line.coverage(0)[1],
    #          cov_ab: line.coverage(0)[2],
    #          hgvs:   line.hgvs ? line.hgvs.truncate(255) : '',
    #          sample_data: line.sample(0) ? line.sample(0).to_json.to_s.truncate(255) : '',
    #          pnv:    rand()
    #  )
    #end
  end

end
