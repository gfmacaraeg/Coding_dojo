class SessionsController < ApplicationController
    before_action :require_login, only: [:destroy]

    def create
        @user = User.find_by_email(params[:email])

        if @user
            if @user.try(:authenticate, params[:password])
                session[:user_id] = @user.id 

                return redirect_to events_path
            end

            flash[:errors] = ["Stop fat fingering"]
        end

        flash[:errors] = ["Email account not valid"]

        return redirect_to :back
    end

    def destroy
        session.clear

        return redirect_to root_path
    end
end
