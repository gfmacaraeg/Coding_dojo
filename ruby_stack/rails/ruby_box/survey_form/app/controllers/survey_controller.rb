class SurveyController < ApplicationController
  def new
  	session[:views] = 0
  end
  def process_survey
        # Increment the session views upon submission of the form          
        session[:views] = session[:views] + 1

        # Save the post data (params[:survey]) to session
        session[:result] = params[:survey]

        # Save success message to flash to show it once
        flash[:success] = "Thanks for submitting this form! You have submitted this form #{ session[:views] } time(s) now."
        
        # To prevent submission of form with page reload
        redirect_to '/survey/show'
    end

  def show
  	@result = session[:result]

  end
end
