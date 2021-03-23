class PosGt < EvadbQuery
  
  #----------------------------------------------------------
  def self.descr
    return <<~END_OF_DESCRIPTION
Describe here
END_OF_DESCRIPTION
  end

  #----------------------------------------------------------
  def self.form
    return <<~END_OF_FORM_DEFINITION
pos_gt:
  tag: input
  label: 'Position >'
  config: 
    type: text
  validation: 
    isNumeric
END_OF_FORM_DEFINITION
  end

  #----------------------------------------------------------
  def self.where( relation, params )
      return params[:pos_gt] ? relation.where( "start > ? ", params[:pos_gt])
                            : relation
  end
end
