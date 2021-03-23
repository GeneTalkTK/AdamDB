class EvadbQuery
    def self.register
        EvadbQueries::register( self )
    end

    def self.execute
        #Rails.logger.error("Foo executed")
        return "My name is "  + self.name
    end 

    def self.descr
        return ''
    end

    def self.form
        return ''
    end    

    def self.where( relation )
        return relation
    end
end