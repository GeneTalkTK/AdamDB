class PosLt < EvadbQuery
  
  #----------------------------------------------------------
  def self.descr
    return <<~END_OF_DESCRIPTION
Describe here
END_OF_DESCRIPTION
  end

  #----------------------------------------------------------
  def self.form
    return <<~END_OF_FORM_DEFINITION
pos_lt:
  tag: input
  label: 'Position <'
  config: 
    type: text
  validation: 
    isNumeric
END_OF_FORM_DEFINITION
  end

  #----------------------------------------------------------
  def self.where( relation, params )
      return params[:pos_lt] ? relation.where( "start < ? ", params[:pos_lt])
                            : relation
  end
end
