require "test_helper"
require "generators/query/query_generator"

class QueryGeneratorTest < Rails::Generators::TestCase
  tests QueryGenerator
  destination Rails.root.join('tmp/generators')
  setup :prepare_destination

  # test "generator runs without errors" do
  #   assert_nothing_raised do
  #     run_generator ["arguments"]
  #   end
  # end
end
