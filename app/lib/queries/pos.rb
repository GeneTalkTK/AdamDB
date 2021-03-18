class Pos < EvadbQuery
    def self.execute
        #Rails.logger.error("Foo executed")
        return "My name is "  + self.name
    end
    
    def self.where( relation, params )
        return relation.where( "start < ? ", 100000)
    end
end