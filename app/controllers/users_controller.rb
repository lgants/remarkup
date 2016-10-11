class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  # validate :email, uniqueness: { case_sensitive: false }
  # validate :last_name, :presence => true

    def autocomplete
      @users = User.order(:first_name).where("first_name LIKE ? OR last_name LIKE ?", "%#{params[:term]}%", "%#{params[:term]}%")
      # @users = User.order(:first_name).where("first_name LIKE ?", "%#{params[:term]}%")
      @speech = Speech.find(params[:speech_id].to_f)
      respond_to do |format|
        format.html
        format.json {
          render json: @users.map{ |user|
            Hash[ [ [:user_full_name, user.first_name + " " + user.last_name], [:speech_id, @speech.id], [:user_id, user.id] ] ]
            # Hash[ [ [:user_full_name, user.first_name + " " + user.last_name], [:highlights, Highlight.find_by(user_id: user.id, speech_id: @speech.id).snippets], [:user_id, user.id] ] ]
          }.to_json
          # render json: @users.map{|user| user.first_name + " " + user.last_name + " " + Highlight.find_by(user_id: user.id, speech_id: @speech.id).snippets}.to_json
          }
      end
    end


  # def index
  # end

  # GET /users/1
  # GET /users/1.json
  def show
    @users = User.all
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
    @advanced_li = true
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        format.html { redirect_to @user, notice: 'User was successfully created.' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :phone, :organization, :password, :biography, :default_color, :public_figure, :entity, :moderator, :admin)
    end
end
