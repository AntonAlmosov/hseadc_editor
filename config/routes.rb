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

  resources :page do
    collection do
      post :handle_edit
    end
  end

  resources :phrase do
    collection do
      post :handle_create
      post :handle_edit
      post :handle_destroy
    end
  end

  resources :block do
    collection do
      post :handle_create
      post :handle_edit
      post :handle_destroy
      post :handle_upload
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
