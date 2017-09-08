class User
  def first_name=(val)
    @first_name = val
  end
end
user1 = User.new
user2 = User.new
user1.first_name = "Matz"
puts user1.first_name