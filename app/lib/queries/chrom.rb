class Chrom < EvadbQuery
  
  #----------------------------------------------------------
  def self.descr
    return <<~END_OF_DESCRIPTION
Describe here
END_OF_DESCRIPTION
  end

  #----------------------------------------------------------
  def self.form
    return <<~END_OF_FORM_DEFINITION
    chrom:
      tag: select
      label: Chromosome
      config:
        options:
          [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, X, Y, M]
END_OF_FORM_DEFINITION
  end

  #----------------------------------------------------------
  def self.where( relation, params )
      return params[:chrom] ? relation.where( chrom: params[:chrom]) 
                            : relation
  end
end
