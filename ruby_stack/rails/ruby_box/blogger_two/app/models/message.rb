class Message < ActiveRecord::Base
  belongs_to :user
  belongs_to :post
  has_many :comments, as: :commentable
  validates :author, :message, presence: true
end
