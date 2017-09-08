class User < ActiveRecord::Base
	validates :first_name, :last_name, :password, :email, :age, presence: true
	validates :age, numericality: { only_integer: true }
	validates_numericality_of :age, less_than: 150
	validates_numericality_of :age, greater_than: 10
	validates :first_name, :last_name, length: { minimum: 3 }
	
	def alluser
		User.find_by_sql("select * from users")
	end	
end
