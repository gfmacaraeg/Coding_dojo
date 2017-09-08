a = {first_name: "Michael", last_name: "Choi"}
b = {first_name: "John", last_name: "Doe"}
c = {first_name: "Jane", last_name: "Doe"}
d = {first_name: "James", last_name: "Smith"}
e = {first_name: "Jennifer", last_name: "Smith"}
names = [a, b, c, d, e]

def print_names list_names=[]
	print "You have ", list_names.length,  " names in the names array"
	 list_names.each {|i| puts "The name is #{i[:first_name]} #{i[:last_name]}"}
end

print_names names

