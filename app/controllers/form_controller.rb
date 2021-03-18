class FormController < ApplicationController

  def index
    fields=YAML.load_file( Rails.configuration.evadb.fields_file );
    render json: fields
  end

  def search
  end
end
