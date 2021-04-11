class SandboxController < ApplicationController
  def index
  end

  def img
    pp params.to_yaml
    filename = File.basename(params[:photo][:picture].original_filename )
    File.open( "#{Rails.root}/DATA/upload/#{filename}", "wb") { |f| f.write(params[:photo][:picture].tempfile.read) }
  end

end
