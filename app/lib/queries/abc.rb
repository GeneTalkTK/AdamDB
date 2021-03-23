class Abc < EvadbQuery
  
  #----------------------------------------------------------
  def self.descr
    return <<~END_OF_DESCRIPTION
Describe here
END_OF_DESCRIPTION
  end

  #----------------------------------------------------------
  def self.form
    return <<~END_OF_FORM_DEFINITION
abc:
  tag: select
  label: testfield
  config:
    options:
      - value: a
        displayValue: AAA
      - value: b
        displayValue: BBB
      - value: c
        displayValue: CCC 
END_OF_FORM_DEFINITION
  end

  #----------------------------------------------------------
  def self.where( relation, params )
      return relation
  end
end
