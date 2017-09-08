class SessionsController < ApplicationController
  def create
  	@user = User.find_by_email(params[:email])
  	if @user
  		if @user.try(:authenticate, params[:password])
  			session[:user_id] = @user.id
  			return redirect_to '/secrets/'
  		end
  	else
  		flash[:errors] = ["Invalid credentials"]
  		
  	end
  	flash[:errors] = ["Invalid credentials"]
  	return redirect_to :back
  end

  def destroy
  	session.clear
  	redirect_to root_path
  end
end
