class EvadbController < ApplicationController
    
    ############################################################################
    def index
    end
  
    ############################################################################
    def forms
        @fields = YAML.load_file( Rails.configuration.evadb.fields_file );
        @forms  = YAML.load_file( Rails.configuration.evadb.forms_file );
        render json: { fields: @fields, forms: @forms }
    end
  
    ############################################################################
    def search
        print Rails.logger.info params.to_yaml
        if (params) 
            print Rails.logger.info params[:form].inspect
            print Rails.logger.info params[:values].inspect
            print Rails.logger.info params[:evadb].inspect
        end

        #params[:values].each do |key, value|
        #    print "\n#{key} => #{value}\n"
        #    print "\n#{key} => #{params[:values][key]}\n"
        #end

        variants = Variant
        # variants = Chrom.where(variants, params[:values])
        # variants = Pos.where(variants, params[:values])

        params[:form][:fields].each do |field|
            puts field
            puts params[:values][:fields]
            variants = Object.const_get( field.camelcase ).where( variants, params[:values] )
        end

        variants = variants.order( :chrom, :start )

        vararr = []
        variants.find_each do |v|
            vararr << v.to_compact
        end
        # .where(chrom: 1).where("start < 100000").count
        reply = { 
                    status: "ok",
                    count: variants.count,
                    columns: Variant::EVADBDATA,
                    variants: vararr
            }
        render json: reply
    end

end
