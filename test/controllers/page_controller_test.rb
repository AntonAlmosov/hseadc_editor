require 'test_helper'

class PageControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get page_index_url
    assert_response :success
  end

  test "should get show" do
    get page_show_url
    assert_response :success
  end

  test "should get edit" do
    get page_edit_url
    assert_response :success
  end

end
