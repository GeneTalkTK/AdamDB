require 'csv'    

filename=Rails.root.join('SUPPLEMENT', 'HGNC', 'hgnc_complete_set.csv')

# . und - im header gegen _ tauschen

 system "sed -i 's/pseudogene\.org/pseudogene_org/' #{filename}"
 system "sed -i 's/mamit-trnadb/mamit_trnadb/' #{filename}"

task :importhgnc => [:environment] do
 CSV.foreach(filename, headers: true, col_sep: "\t") do |row|
   Gene.create!(row.to_hash)
 end
end

