Rails.application.routes.draw do
  resources :groups
  resources :speeches
  # resources :users
  resources :sessions
  resources :highlights

  root "speeches#index"
  post "/create_highlights", to: "highlights#create"

  resources :users do
    collection do
      get 'autocomplete'
    end
  end
  
  # get "/gethighlight", to: "highlights/highlight_id"

  # delete "/delete_highlights", to: "highlights#test"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
