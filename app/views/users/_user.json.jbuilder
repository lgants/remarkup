json.extract! user, :id, :first_name, :last_name, :email, :phone, :organization, :password_digest, :biography, :default_color, :public_figure, :entity, :moderator, :admin, :created_at, :updated_at
json.url user_url(user, format: :json)
