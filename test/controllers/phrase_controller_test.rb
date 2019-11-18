require 'test_helper'

class PhraseControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get phrase_create_url
    assert_response :success
  end

  test "should get edit" do
    get phrase_edit_url
    assert_response :success
  end

end
