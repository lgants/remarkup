Rails.application.routes.draw do
  resources :groups
  resources :speeches
  resources :users
  resources :sessions
  resources :highlights

  root "speeches#index"
  post "/create_highlights", to: "highlights#create"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
