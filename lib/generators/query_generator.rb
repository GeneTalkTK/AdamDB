class QueryGenerator < Rails::Generators::NamedBase
  desc "Generator stub for EVADB query class. NAME must be in snake case."

  def create_query_class
    camel = name.camelize

    create_file "app/lib/queries/#{name}.rb", <<ENDOFTEMPLATE
class #{camel} < EvadbQuery
  
  #----------------------------------------------------------
  def self.descr
    return <<~END_OF_DESCRIPTION
Describe here
END_OF_DESCRIPTION
  end

  #----------------------------------------------------------
  def self.form
    return <<~END_OF_FORM_DEFINITION
#{name}:
  tag: input
  label: '#{name.titleize}'
  config:
  type: text
  value: 
END_OF_FORM_DEFINITION
  end

  #----------------------------------------------------------
  def self.where( relation, params )
      return params[:#{name}] ? relation
                              : relation
  end
end
ENDOFTEMPLATE

  end
end