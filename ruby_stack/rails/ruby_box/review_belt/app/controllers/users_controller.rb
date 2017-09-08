class UsersController < ApplicationController
  def index
  end

  def create
  	p "downcase*******#{params[:location][:city]}"
  	@check_loc = Location.find_by(city: params[:location][:city], state: params[:location][:state])
  	p "check loc #{@check_loc}"
  	if @check_loc
  		# p "check_lock********************#{@check_loc.first}"
  		@user = User.create(user_params, location_id: @check_loc.id)
  	else
  		@loc = Location.create(city: params[:location][:city], state: params[:location][:state])
  		# p @loc.errors
  		if @loc  != nil
  			
  			@user = User.create(user_params)
  			# p "user********************#{@user.first_name}"
  		else
  			flash[:errors] = @loc.errors
  			redirect_ to :back
  		end	
  	end
  end

  def show
  end

  def update
  end
  private 
  	def user_params
  		params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  		
  	end
end
