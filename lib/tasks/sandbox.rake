namespace 'sandbox' do
    task :doit => :environment do
        VcfFile.new( "#{Rails.root}/DATA/VEP/FritzExomeWithMelanoma_VEP.vcf" ).each_data_line do |line|
            pp line.vep[:consequence]
        end
    end

end
