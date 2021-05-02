require 'csv'    

task :importhgnc => [:environment] do
 filename=Rails.root.join('SUPPLEMENT', 'HGNC', 'hgnc_complete_set.csv')
 CSV.foreach(filename, headers: true, col_sep: "\t") do |row|
   Gene.create!(row.to_hash)
 end
end

