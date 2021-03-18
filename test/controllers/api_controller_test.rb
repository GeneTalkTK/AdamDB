require "test_helper"

class ApiControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_index_url
    assert_response :success
  end

  test "should get forms" do
    get api_forms_url
    assert_response :success
  end

  test "should get search" do
    get api_search_url
    assert_response :success
  end
end
