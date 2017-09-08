class User < ActiveRecord::Base
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i

  has_many :posts
  has_many :messages
  has_many :owners
  has_many :blogs, through: :owners
  has_many :blog_posts, through: :posts, source: :blog
  has_many :comments, as: :commentable
 
  validates :email, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
  validates :first_name, :last_name, :email, presence: true
end
