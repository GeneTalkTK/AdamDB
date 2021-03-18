class EvadbQuery
    @@queries = []

    def self.register
        EvadbQueries::register( self.name )
    end

    def self.get_queries
        return @@queries
    end 
    def execute
        #Rails.logger.error("Foo executed")
        return "My name is "  + self.name
    end 
    def self.where( relation )
        return relation
    end
end