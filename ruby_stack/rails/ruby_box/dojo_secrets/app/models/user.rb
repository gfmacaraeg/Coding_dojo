class User < ActiveRecord::Base
	before_save :downcase_fields
	has_secure_password

	has_many :secrets, dependent: :destroy
	has_many :likes
	has_many :secrets_liked, through: :likes, source: :secret

	validates :first_name, :last_name, presence: true, length: 2..30
	validates_format_of :first_name, :last_name, with: /\A[-a-z]+\Z/i
	validates :email, presence: true, uniqueness: true
	validates_format_of :email, with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/

	def downcase_fields
		self.first_name.downcase!
		self.last_name.downcase!
		self.email.downcase!
	end
end
