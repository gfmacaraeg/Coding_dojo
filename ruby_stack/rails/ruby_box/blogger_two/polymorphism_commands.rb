rails g model Comment content:text commentable:references{polymorphic}
rake db:migrate

>>add to comments model
validates :content, presence: true

>>added to message model
has_many :comments, as: :commentable

>>added to post model
has_many :comments, as: :commentable

>>added to user model
has_many :comments, as: :commentable

Comment.create(content: "First comment posted by the first user.", commentable: User.first)
User.first.comments

Comment.create(content: "First comment posted on a blog.", commentable: Blog.first)
Blog.first.comments
Comment.where(commentable: Blog.first).destroy_all
Comment.where(commentable: Blog.first, id: 1).destroy_all

Comment.create(content: "First comment posted on a message.", commentable: Message.first)
Message.first.comments

Comment.create(content: "First comment posted on the first post.", commentable: Post.first)
Post.first.comments

Comment.update_all(content: "This is an updated comment")
Comment.find(8).update(commentable:Blog.first, content: "2nd update")
