###########################################################################
# Handling a VCF file
#

class VcfFile

    ###########################################################################
    def initialize( file )
        @filename = file
        @meta = {}
    end

    ###########################################################################
    def each_data_line( &block )
        inpfile = open( @filename )
        inpfile.each do |line|
            if line =~ /^##INFO=<ID=CSQ/
                line =~ /Format: (.*)">/
                @meta[:vep_header] = Regexp.last_match(1).split('|')
            end
            next if line =~ /^#/
            line.chomp!
            vcfline = VcfLine.new( line, @meta )

            block.call( vcfline )
            
        end
    end

end

