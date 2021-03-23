namespace 'evadb' do

  ###########################################################################
  desc "Generate FIELDS file"
  task :fields => :environment do
    EvadbQueries.initialize
  end
end