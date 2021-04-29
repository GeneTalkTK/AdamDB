require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Adamdb
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.1

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    
    config.evadb = Rails::Application::Configuration::Custom.new
    config.evadb.query_lib_path = "#{Rails.root}/app/lib/queries"
    config.evadb.fields_file    = "#{Rails.root}/config/evadb/fields.yml"
    config.evadb.forms_file     = "#{Rails.root}/config/evadb/forms.yml"
    
    config.gt = Rails::Application::Configuration::Custom.new
    config.gt.filter_lib_path    = "#{Rails.root}/app/lib/filters"
    config.gt.filter_js_path     = "#{Rails.root}/app/javascript/filters"
    
    # config.autoload_paths += %W(#{config.root}/app/lib)
    config.eager_load_paths << Rails.root.join('app/lib')
    config.eager_load_paths << Rails.configuration.evadb.query_lib_path
    config.eager_load_paths << Rails.configuration.gt.filter_lib_path
  end
end
