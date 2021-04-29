class EvadbQueries
    
    @queries = []
    @fields=''

    def self.initialize
        Dir.each_child( Rails.configuration.evadb.query_lib_path ) do |file|            
            Object.const_get( File.basename(file, '.*').camelcase ).register            
        end

        open( Rails.configuration.evadb.fields_file, 'w') do |file|
            file << "#FOO\n"
            @queries.each do |cls| 
                file << cls.form
            end
        end
    end

    def self.register( cls )
        @queries << cls
    end

    def self.get_queries
        return @queries
    end 
    

end