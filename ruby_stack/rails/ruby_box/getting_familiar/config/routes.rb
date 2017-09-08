Rails.application.routes.draw do
  # get 'say/index'

  # get 'say/new'

  # get 'hello/index'

  # get 'hello/new'
  # root 'hello_controller#index' 
  get "" => "say#index"
  get "say/hello" => "say#sayhello"
  get "say/hello/:name" => "say#name"
  get "times" => "say#times"
  get "times/restart" => "say#restart"
  # get "say/hello/michael" => "say#michael"
  # get "say/:greet" => "say#index"
  # get "say/:greet/:name" => "say#index"

  # get "say/:greet" => "say#index"
end
