class Chrom < EvadbQuery
    def self.execute
        #Rails.logger.error("Foo executed")
        return "My name is "  + self.name
    end

    def self.where( relation, params )
        print params.inspect
        return relation.where( chrom: params[:Chrom])
    end
end