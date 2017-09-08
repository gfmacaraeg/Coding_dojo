class User < ActiveRecord::Base
    belongs_to :location, required: true
    has_many :events, dependent: :destroy
    has_many :meetups, dependent: :destroy
    has_many :joined_events, through: :meetups, source: :event
    has_many :comments, dependent: :destroy

    has_secure_password

    before_save :downcase_fields

    validates :first_name, :last_name, presence: true, length: 2..30
    validates_format_of :first_name, :last_name, with: /\A[-a-z]+\Z/i
    validates :email, presence: true, uniqueness: true
    validates_format_of :email, with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/

    def downcase_fields
        self.first_name.downcase!
        self.last_name.downcase!
        self.email.downcase!
    end

    def self.full_name
        return "#{self.first_name.titleize} #{self.last_name.titleize}"
    end
end
