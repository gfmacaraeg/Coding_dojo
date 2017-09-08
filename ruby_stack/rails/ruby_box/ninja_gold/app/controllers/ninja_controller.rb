class NinjaController < ApplicationController
  
def index
	unless session[:gold]
		session[:gold] = 0
		session[:activities] = []
	end
	
	
end

def new
	if params[:building] == 'farm'
	      rand_gold = rand(10..20)
	    elsif params[:building] == 'cave'
	      rand_gold = rand(5..10)
	    elsif params[:building] == 'house'
	      rand_gold = rand(2..5)
	    elsif params[:building] == 'casino'
	      rand_gold = rand(-50..50)
	end

    	current_time = Time.now
    	session[:gold] += rand_gold
    	if rand_gold > 0
	      session[:activities] << "Earned #{rand_gold} golds from the #{params[:building]}! (#{current_time.strftime('%Y/%m/%d %l:%M %P')})"
	    else
	      session[:activities] << "Entered a casino and lost #{rand_gold} golds... Ouch. (#{current_time.strftime('%Y/%m/%d %l:%M %P')})"
	  end
	redirect_to "/"
end

end