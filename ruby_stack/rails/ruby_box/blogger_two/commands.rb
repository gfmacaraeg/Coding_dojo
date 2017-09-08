# Create appropriate models
rails g model User first_name:string last_name:string email:string
rails g model Blog name:string description:text
rails g model Owner user:references blog:references
rails g model Post title:string content:text user:references blog:references
rails g model Message author:string message:text user:references post:references
rake db:migrate

# Create appropriate validations (think about what fields you would need to require, what other validation rules you would need)
# User Model
class User < ActiveRecord::Base
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  has_many :owners
  has_many :messages
  has_many :posts
  # all the blogs owned by a specific user
  has_many :blogs, through: :owners

  # all the blogs a user has posted on
  has_many :blog_posts, through: :posts, source: :blog

  validates :email, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
  validates :first_name, :last_name, :email, presence: true
end

# Owner Model
class Owner < ActiveRecord::Base
  belongs_to :user
  belongs_to :blog
end

# Blog Model
class Blog < ActiveRecord::Base
  has_many :owners
  has_many :posts

  # all the users that own a specifc blog
  has_many :users, through: :owners

  # all the users that posted on a specific blog
  has_many :user_posts, through: :posts, source: :user

  validates :name, :description, presence: true
end

# Post Model
class Post < ActiveRecord::Base
  has_many :messages
  belongs_to :blog
  belongs_to :user

  validates :content, :title, presence: true
end

# Message Model
class Message < ActiveRecord::Base
  belongs_to :post
  belongs_to :user

  validates :author, :message, presence: true
end

# 1. Create 5 users
User.create(first_name: "John", last_name: "Doe", email: "john@doe.com")
User.create(first_name: "Jane", last_name: "Doe", email: "jane@doe.com")
User.create(first_name: "Jessica", last_name: "Doe", email: "jessica@doe.com")
User.create(first_name: "Michael", last_name: "Smith", email: "michael@smith.com")
User.create(first_name: "Michelle", last_name: "Smith", email: "michelle@smith.com")

# 2. Create 5 blogs
1.upto(5) { |i| Blog.create(name: "Blog #{i}", description: "This is blog ##{i}")}

# 3. Have the first 3 blogs be owned by the first user
Owner.create(user: User.first, blog: Blog.first)
Owner.create(user: User.first, blog: Blog.second)
Owner.create(user: User.first, blog: Blog.third)

# 4. Have the 4th blog you create be owned by the second user
Owner.create(user: User.second, blog: Blog.fourth)

# 5. Have the 5th blog you create be owned by the last user
Owner.create(user: User.last, blog: Blog.fifth)

# 6. Have the third user own all of the blogs that were created.
Blog.all.each { |blog| Owner.create(user: User.third, blog: blog) }

# 7. Have the first user create 3 posts for the blog with an id of 2.
1.upto(3) { |i| Post.create(title: "Post ##{i}", content: "This is the content for post ##{i}", user: User.first, blog: Blog.find(2)) }

# 8. Have the second user create 5 posts for the last Blog.
last_id = Post.maximum(:id) + 1
last_id.upto(last_id + 4) { |i| Post.create(title: "Post ##{i}", content: "This is the content for post ##{i}", user: User.second, blog: Blog.last) }

# 9. Have the 3rd user create several posts for different blogs.
Post.create(title: "Post ##{Post.maximum(:id) + 1}", content: "This is the content for post ##{Post.maximum(:id) + 1}", user: User.third, blog: Blog.third)
Post.create(title: "Post ##{Post.maximum(:id) + 1}", content: "This is the content for post ##{Post.maximum(:id) + 1}", user: User.third, blog: Blog.fourth)
Post.create(title: "Post ##{Post.maximum(:id) + 1}", content: "This is the content for post ##{Post.maximum(:id) + 1}", user: User.third, blog: Blog.fifth)

# 10. Have the 3rd user create 2 messages for the first post created and 3 messages for the second post created
Message.create(author: "Apple Inc", message: "My products are the best", user: User.third, post: Post.first)
Message.create(author: "Microsoft", message: "No way!", user: User.third, post: Post.first)
Message.create(author: "NBA", message: "Basketball is the best sport", user: User.third, post: Post.second)
Message.create(author: "FIFA", message: "We have the world cup. We are the best", user: User.third, post: Post.second)
Message.create(author: "NFL", message: "We are the real football", user: User.third, post: Post.second)

# 11. Have the 4th user create 3 messages for the last post you created.
Message.create(author: "Some Author", message: "My book is the best", user: User.fourth, post: Post.last)
Message.create(author: "Another Author", message: "Your book is really good indeed", user: User.fourth, post: Post.last)
Message.create(author: "Some Other Author", message: "Agree!", user: User.fourth, post: Post.last)

# 12. Change the owner of the 2nd post to the last user.
Post.second.update(user: User.last)

# 13. Change the 2nd post's content to be something else.
Post.second.update(content: "Changing the content to something else")

# 14. Retrieve all blogs owned by the 3rd user (make this work by simply doing: User.find(3).blogs).
User.third.blogs

# 15. Retrieve all posts that were created by the 3rd user
User.third.posts

# 16. Retrieve all messages left by the 3rd user
User.third.messages

# 17. Retrieve all posts associated with the blog id 5 as well as who left these posts.
Post.joins(:user, :blog).where("blogs.id = ?", 5).select("*")

# 18. Retrieve all messages associated with the blog id 5 along with all the user information of those who left the messages
In this problem, we need to do a subquery
Message.joins(:user).where(post: Blog.find(5).posts).select("*")

# 19. Grab all user information of those that own the first blog (make this work by allowing Blog.first.owners to work).
Blog.first.users

# 20. Change it so that the first blog is no longer owned by the first user.
Owner.where("id = ? AND user_id = ?", 1, 1,).update_all("user_id = 5")
