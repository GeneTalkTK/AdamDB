###########################################################################
# Handling a VCF file
#

class VcfFile

    ###########################################################################
    def initialize( file )
        @filename = file
    end

    ###########################################################################
    def each_data_line( &block )
        inpfile = open( @filename )
        inpfile.each do |line|
            next if line =~ /^#/
            line.chomp!
            vcfline = VcfLine.new( line )

            block.call( vcfline )
            
        end
    end

end

