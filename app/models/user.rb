class User < ApplicationRecord
  has_secure_password
  has_many :highlights
  has_many :speeches, :foreign_key => 'creator_id'

  has_many :user_groups
  has_many :groups, through: :user_groups

  attr_accessor :user_name
  attr_reader :user_name
  #
  # def user_name
  #   user.try(:first_name)
  #
  # end
  #
  # def user_name=(name)
  #   self.name = User.find_by(first_name: name) if name.present?
  # end



end
