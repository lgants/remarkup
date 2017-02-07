class User < ApplicationRecord
  has_secure_password
  has_many :highlights
  has_many :speeches, :foreign_key => 'creator_id'

  has_many :user_groups
  has_many :groups, through: :user_groups

  validates :email, {uniqueness: true}
  validates_presence_of :first_name, :last_name, :email

  has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100#" }, :default_url => "/images/default-profile.png"
  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/

end
