class UsersController < ApplicationController
	before_action :authenticate, only: [:show]
#this is the registration form index	
  def index
  	if current_user
  		redirect_to '/secrets/'
  	end
  end

  def create
  	@find_user = User.find_by_email(user_params[:email])
  	if @find_user
  		flash[:errors] = ["That email address has been registered"]
  		return redirect_to :back
  	else
  		@user = User.new(user_params)
  		if @user.valid?
  			@user.save
  			session[:user_id] = @user.id
  			redirect_to "/secrets/"
  		else	
  			flash[:errors] = @user.errors.full_messages
  			p flash[:errors]
  			return redirect_to :back
  		end	
  	end
  end

  def show
  	@user_secrets = Secret.where(user_id: current_user.id)
  	p @user_secrets
  end

  def delete
  	@secret = Secret.find(params[:id])
  	if @secret.user_id == current_user.id
  		@secret.destroy
  		return redirect_to "/users/#{current_user.id}"
  	else
  		flash[errors] = ["Cannot delete secret you did not post!"]
  		return redirect_to "/users/#{current_user.id}"
  	end
  	return redirect_to "/users/#{current_user.id}"
  end	

  private
  	def user_params
  		params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  	end

  	def authenticate
  		if current_user
		            if params[:id] != current_user.id
			end
		else
			return redirect_to '/'
		end
   	 end
  	
end


