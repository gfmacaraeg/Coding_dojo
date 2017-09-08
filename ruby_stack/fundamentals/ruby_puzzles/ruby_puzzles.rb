# arr = [3,5,1,2,7,9,8,13,25,32]
# sum = 0
# arr.each {|i| sum += i }
# puts sum
# print arr.find_all {|i| i > 10}

# arr =["John", "KB", "Oliver", "Cory", "Matthew", "Christopher"]
# print arr.shuffle!
# print arr.reject { |i| i.length > 5}

# arr =  ('a'..'z').to_a.shuffle!
# puts arr.first
# puts arr.last
# print arr.first.any? { |word| sentence.include?('a') }

# arr = (1..10).collect { |i|  rand(55..100)}
# print arr.sort! { |a,b| b <=> a}
# print arr.minmax

# arr = (0..5).collect { |i| (65+rand(26)).chr}.join
# print arr


# arr = (0..10).collect { |i| (0..5).collect { |i| (65+rand(26)).chr}.join}
# print arr