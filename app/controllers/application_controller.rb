class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :authenticate_user, :signed_in?, :moderator?, :admin?

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def signed_in?
    !!current_user
  end

  def moderator?
    @current_user.moderator = true ? true : false
  end

  def admin?
    @current_user.admin = true ? true : false
  end

  def authenticate_user
    unless signed_in?
      redirect_to root_path
    end
  end

end
