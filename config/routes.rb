Rails.application.routes.draw do
  get 'block/handle_create'
  get 'block/handle_edit'
  get 'block/handle_destroy'
  get 'block/handle_upload'
  get 'phrase/create'
  get 'phrase/edit'
  get 'page/index'
  get 'page/show'
  get 'page/edit'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
