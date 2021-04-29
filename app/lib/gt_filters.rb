class GtFilters
    
    @filters = []

    def self.initialize
        Dir.each_child( Rails.configuration.gt.filter_lib_path ) do |file|            
            Object.const_get( File.basename(file, '.*').camelcase ).register            
        end

        open( "#{Rails.configuration.gt.filter_js_path}/index.js", 'w') do |file|
            file << "// Generated by gt_filters.rb, do not edit\n\n"
            @filters.each do |cls| 
                file << "export { #{cls} } from './#{cls}.js'\n"
            end
        end

        open( "#{Rails.configuration.gt.filter_js_path}/filterMap.js", 'w') do |file|
            file << "// Generated by gt_filters.rb, do not edit\n\n"
            @filters.each do |cls| 
                file << "import #{cls} from './#{cls}'\n"
            end
            file << "\nconst filterMap = {\n"
            @filters.each do |cls| 
                file << "    #{cls}: #{cls},\n"
            end
            file << "}\n\nexport default filterMap;\n"
        end        
    end

    def self.register( cls )
        @filters << cls
    end

    def self.get_filters
        return @filters
    end 
    

end