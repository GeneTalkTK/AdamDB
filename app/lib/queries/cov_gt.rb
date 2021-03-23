class CovGt < EvadbQuery
  
  #----------------------------------------------------------
  def self.descr
    return <<~END_OF_DESCRIPTION
Describe here
END_OF_DESCRIPTION
  end

  #----------------------------------------------------------
  def self.form
    return <<~END_OF_FORM_DEFINITION
cov_gt:
  tag: input
  label: 'Cov >'
  config:
  type: text
  value: 
END_OF_FORM_DEFINITION
  end

  #----------------------------------------------------------
  def self.where( relation, params )
      return params[:cov_gt] ? relation.where( "cov > ? ", params[:cov_gt] )
                              : relation
  end
end
