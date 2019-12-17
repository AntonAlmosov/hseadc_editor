Rails.application.routes.draw do
  root :to => 'page#index'

  resources :page do
    collection do
      get :get_pages
      post :get_page
      post :handle_create
      post :handle_edit
    end
  end

  resources :block do
    collection do
      post :handle_create
      post :handle_edit
      post :handle_destroy
    end
  end

  resources :phrase do
    collection do
      post :handle_create
      post :handle_edit
      post :handle_destroy
      post :handle_upload
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
