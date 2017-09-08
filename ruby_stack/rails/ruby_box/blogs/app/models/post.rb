class Post < ActiveRecord::Base
  validates :title, :content, presence: true
  validates :title, length: {minimum: 7}

  has_many :messages
  belongs_to :blog
end
