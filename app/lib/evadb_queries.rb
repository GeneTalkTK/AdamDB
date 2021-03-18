class EvadbQueries
    QUERY_LIB_PATH = "#{Rails.root}/app/lib/queries"

    @queries = []

    def self.initialize
        Dir.each_child( QUERY_LIB_PATH ) do |q|
            Object.const_get(File.basename(q, '.*').capitalize).register
        end
    end

    def self.register( name )
        @queries << name
    end

    def self.get_queries
        return @queries
    end 
    
end