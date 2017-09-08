def guess_number guess
    number = 25
    if guess == number
    	puts "You got it!"
    else	
    	if guess < number
    		puts "Guess was too low"
    	elsif guess > number
    		puts "Guess was to High"
    	end	
   end
end

guess_number 25