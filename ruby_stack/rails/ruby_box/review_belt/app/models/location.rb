class Location < ActiveRecord::Base
	before_save :downcase_fields
	
	validates :city, presence: true, length: 2..50
	validates :city, :state, uniqueness: true
	validates :state, presence: true, length: { is: 2}
	validates_format_of :city, :state, with: /\A[-a-z]+\Z/i

	def downcase_fields
		self.city.downcase!
		self.state.downcase!
	end
end
