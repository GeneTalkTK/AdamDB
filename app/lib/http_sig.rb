class HttpSig

  #######################################################################
  def self.authenticate( request )
    puts request.headers.inspect
    auth_string = request.headers[:Authorization]
    puts auth_string
    raise HttpSignature::AuthenticationError.new("No signature provided") unless auth_string
    
    auth_string =~ SIGNATURE_RE
    sig_base64 = Regexp.last_match(1)

    auth_string =~ KEYID_RE
    key_id = Regexp.last_match(1)

    raise HttpSignature::AuthenticationError.new("Bad site") unless HTTP_SIGNATURE_CLIENTS.key?( key_id )

    signature_headers = get_headers_from_signature( auth_string )

    data = build_data_to_verify( request, signature_headers )

    secret = HTTP_SIGNATURE_CLIENTS[key_id]
    sig = Base64.strict_decode64(sig_base64)
    digest_name = 'sha256'

    # puts "key_id: " + key_id.inspect; puts "Secret " + secret.inspect; puts "Signature " + sig.inspect; puts "Data " + data.inspect

    valid = OpenSSL::PKey::RSA.new( secret ).verify(digest_name, sig, data)
    # puts valid

    raise HttpSignature::AuthenticationError.new("Bad signatuere") unless valid
  end

  #######################################################################
  private

  KEYID_RE     = Regexp.compile('keyId="([\(\)\sa-z0-9-]+?)"')
  SIGNATURE_RE = Regexp.compile('signature="(.+?)"')
  HEADERS_RE   = Regexp.compile('headers="([\(\)\sa-z0-9-]+?)"')
  ALGORITHM_RE = Regexp.compile('algorithm="([\(\)\sa-z0-9-]+?)"')

  def self.get_headers_from_signature( signature )
    if ( signature =~ HEADERS_RE )
      return Regexp.last_match[1].split
    end
    return ["date", "x-beacon-user"]
  end


  def self.build_data_to_verify( request, signature_header )
    res = []
    signature_header.each do |header|
      next if header.include?( 'request-target' )
      res << "#{header}: #{request.headers[header]}"
    end
    return res.join("\n")
  end

end


# Authorization:
# Signature 
#    keyId="test-client",
#    algorithm="rsa-sha256",
#    headers="date x-beacon-user",
#    signature="mrcPUy8rdEs88krLLIAaLxD0oHejy/3CM5u7xsAD35kIkmvW89SQVTeO4ZyVNrPUU2yYAYlEIHdDP6w4fuEJVvKgNjzLlS9TAdftoLrOVQhNYIe6oyfOsgsL6jre/oFZ+bfXxcZZvwboVeIP6rhBYHs3cKB37kC1Y57CvJcME8EF66yppn11N9E1DhiActeBglBaAegkK/6R3p+eYOxRNCc2nGAcXa6bz4BWc6AjHz+Tpr6T3jVp404WZ2FwFS/tNQ+aujjYhnanM3wA5fHpp3C4J9mOZgeXh3QU6b8QF3RnzAjtVV2xiRdWI4JuPBWDSyTMOzOGdepLkLUXeXIMuA==",
#    created="1615215462"
