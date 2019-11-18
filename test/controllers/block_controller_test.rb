require 'test_helper'

class BlockControllerTest < ActionDispatch::IntegrationTest
  test "should get handle_create" do
    get block_handle_create_url
    assert_response :success
  end

  test "should get handle_edit" do
    get block_handle_edit_url
    assert_response :success
  end

  test "should get handle_destroy" do
    get block_handle_destroy_url
    assert_response :success
  end

  test "should get handle_upload" do
    get block_handle_upload_url
    assert_response :success
  end

end
