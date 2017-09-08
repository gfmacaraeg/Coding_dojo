Rails.application.routes.draw do
  # Application Routes
  root 'application#index'
  # User Routes
  resources :users, exclude: [:index]
  # Session Routes
  post 'login' => 'sessions#create'
  delete 'logout' => 'sessions#destroy'
  # Event Routes
  resources :events
  post 'events/:id/user' => 'meetups#create'
  delete 'events/:id/user' => 'meetups#destroy'
  # Comment Routes
  post 'comments' => 'comments#create'
end
