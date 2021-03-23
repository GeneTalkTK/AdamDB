class Function < EvadbQuery
  
  #----------------------------------------------------------
  def self.descr
    return <<~END_OF_DESCRIPTION
Describe here
END_OF_DESCRIPTION
  end

  #----------------------------------------------------------
  def self.form
    return <<~END_OF_FORM_DEFINITION
function:
  tag: boxes
  label: Functional
  config:
    type: checkbox
    options:
      - unknown
      - syn
      - missense
      - nonsense
      - stoploss
      - splice
      - nearsplice
      - frameshift
      - indel
      - 5-UTR
      - 3-UTR
      - non-coding
      - mirna
      - intronic
      - intergenic
      - regulation
    defaults:
      - unknown
      - missense
      - nonsense
      - stoploss
      - splice
      - frameshift
      - indel
END_OF_FORM_DEFINITION
  end

  #----------------------------------------------------------
  def self.where( relation, params )
    return params[:function] ? relation.where( function: params[:function])
                             : relation
  end
end
