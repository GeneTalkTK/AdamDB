class Bar < EvadbQuery
    def self.execute
        # Rails.logger.error("Foo executed")
        return "My name is "  + self.name
    end
        
    def self.where( relation, params )
        return relation
    end
end