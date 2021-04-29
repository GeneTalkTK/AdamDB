Rails.application.reloader.to_prepare do
    # Autoload classes and modules needed at boot time here.
    GtFilters::initialize
    EvadbQueries::initialize
end