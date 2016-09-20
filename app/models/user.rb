class User < ApplicationRecord
  has_secure_password
  has_many :highlights
  has_many :speeches, :foreign_key => 'creator_id' 

  has_many :user_groups
  has_many :groups, through: :user_groups
end
