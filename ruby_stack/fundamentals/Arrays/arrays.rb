a = [ 1,2,3,4,5,6,7,8,9,10 ]
puts "at or fetch ", a.at(1), a.fetch(2)
puts "reverse", a.reverse
puts "length", a.length
puts "sort", a.sort
puts "slice at index 5", a.slice(5)
puts "shuffle", a.shuffle
puts "join", a.join("-")
puts "insert", a.insert( 1, 1000)
puts "values at", a.values_at(1,2).join(' and ')
puts "each", a.each { |word| print word, "--" }
 
puts a.include?(2)
puts a.last
puts a.max