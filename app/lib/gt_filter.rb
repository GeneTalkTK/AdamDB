class GtFilter
    def self.register
        GtFilters::register( self )
    end

   def self.descr
        return ''
    end

    def self.create_gui
        return ''
    end    

    def self.create_summary
        return ''
    end    

    def self.create_preset
        return ''
    end

    def self.execute
        #Rails.logger.error("Foo executed")
        return "My name is "  + self.name
    end 

 end