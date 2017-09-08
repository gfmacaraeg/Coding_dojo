class UsersController < ApplicationController
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
  end
  private
  	def user_params
  		params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  	end
end
