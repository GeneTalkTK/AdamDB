class BeaconController < ApplicationController

  before_action :authenticate

  #======================================================================
  def index 
    response = {
        id: 'GeneTalk-Test',
        name: 'GeneTalk Test Site',
        apiVersion: "v1.0.0"
        
    }
    render json: response
  end

  #======================================================================
  def query
    redisdb = Gfv.new
    chr = params['referenceName'] || params['chrom']
    pos = params['start'] || params['pos']

    vec = redisdb.get_vector( chr, pos )

    ref = params['referenceBases'] || vec['r']
    all = params['alternateBases'] || params['alt']
    ass = params['assemblyId']

    exists = vec.key?( "#{ref}#{all}") || vec.key?( "#{all}#{ref}")

    response = {
        beaconId: 'GeneTalk Test Site', 
        apiVersion: 'v1.0.0',
        exists: exists,
        alleleRequest: {
          referenceName: chr,
          referenceBases: ref,
          start: pos,
          alternateBases: all,
          assemblyId: "GRCh37"
        },
        datasetAlleleResponse: nil,
        error: nil,
    }
    render json: response
  end

  #======================================================================
  def info
  end

  private
  def authenticate
    begin
      HttpSig::authenticate( request )
    rescue => exception
      head(403)
    end
    # response = { status: "not ok", message: 'unauthorized'}
  end



end
