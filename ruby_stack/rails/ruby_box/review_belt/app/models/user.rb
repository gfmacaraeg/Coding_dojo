class User < ActiveRecord::Base
	has_secure_password

	before_save :downcase_fields
	
	belongs_to :location
	has_many :events, dependent: :destroy 
	has_many :joined_events, dependent: :destroy
	
	validates :first_name, :last_name, presence: true, length: 2..30
	validates_format_of :first_name, :last_name, with: /\A[-a-z]+\Z/i
	validates :email, presence:true, length: 2..30, uniqueness:true
	validates_format_of :email, with:/\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/


	def downcase_fields
		self.first_name.downcase!
		self.last_name.downcase!
		self.email.downcase!
	end

end
