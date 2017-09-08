class UsersController < ApplicationController
    skip_before_action :require_login, only: [:create]
    before_action :auth, except: [:create]

    def show
        @user = User.find(params[:id])
    end

    def create
        @location = Location.existsOrCreate(params[:user][:city], params[:user][:state])

        @user = User.new(user_params)

        if @user.save && @location.valid?
            
            flash[:notice] = ["Registered successfully"]

            session[:user_id] = @user.id 

            return redirect_to '/events'
        end

        errors = @user.errors.full_messages + @location.errors.full_messages

        flash[:errors] = errors

        return redirect_to :back
    end

    def edit
        @user = User.find(params[:id])
    end

    def update
        @location = Location.existsOrCreate(params[:location][:city], params[:location][:state])

        @user = User.find(params[:id])
        
        if @location.valid?
            if @user.update(user_params)
                flash[:notice] = ["User Updated"]

                return redirect_to user_path(@user)
            end
        end

        errors = @user.errors.full_messages + @location.errors.full_messages

        flash[:errors] = errors

        return redirect_to :back
    end

    private
        def user_params
            params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation).merge(location: @location)
        end

        def auth
            return redirect_to user_path(current_user) unless current_user.id == params[:id].to_i
        end
end
