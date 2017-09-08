class SayController < ApplicationController
  # def index
  # 	if params[:greet] == "hello" && params[:name] == "michael"
  # 		@greet = "hello"
  # 		@user = "joe"
  # 	else
  # 		@greet = params[:greet]
  # 		@user = params[:name]
  # 	end
  	
  # end
  # def root
  # 	redirect_to "/users/profile"
  # end

  # def new
  # end

  def index
    render text: "What do you want me to say?"
  end
  def sayhello
  	render text: "Saying Hello!"
  end
  def name
  	if params[:name] == "michael"
  		redirect_to "/say/hello/joe"
  	else
  		render text: "Saying Hello #{params[:name]}"
  	end
  end

  def times
  	if session[:count]
  		session[:count] += 1
  	else
  		session[:count] = 1
  	end
  	render text: "You visited this url #{session[:count]} time"
  end

  def restart
  	session[:count] = nil
  	render text: "Destroyed the session!"
  end

end









