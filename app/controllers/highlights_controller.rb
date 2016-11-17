class HighlightsController < ApplicationController
  before_action :set_user, only: [:show]
  before_action :set_speech, only: [:show]
  before_action :set_highlight, only: [:show]
  # before_action :find, only: [:show, :create, :update, :destroy]
  # before action check_highlight used to check whether highlight alread exists


  # GET /highlights
  # GET /highlights.json
  def index
    @highlight = Highlight.all
  end

  # GET /highlights/1
  # GET /highlights/1.json
  def show
    binding.pry
    # highlights = Highlight.find_by(user_id: @user_id, speech_id: @speech_id)
    #
    # @highlights = highlights
    # @speech = Speech.find(speech_id)
    # @user = User.find(user_id)
    # @current_user = current_user


    respond_to do |format|
      format.js {}
    end
  end


  # GET /highlights/1/edit
  def edit
  end



  # POST /highlights
  # POST /highlights.json
  def create
    #the current user will always be the same when coming from this

    speech_id = params[:data][:speech_id].to_i
    user_id = current_user.id
    snippets = JSON.parse(params[:data][:snippets])

    # check if highlight already exists
    if highlights = Highlight.find_by(user_id: user_id, speech_id: speech_id)
      highlights.update(snippets: JSON.parse(highlights.snippets).push(snippets))
    else
      highlights = Highlight.new(speech_id: speech_id, user_id: user_id, snippets: snippets)
      highlights.save
    end

    @highlights = highlights
    @speech = Speech.find(speech_id)
    @user = current_user

    respond_to do |format|
      format.js {}
    end
  end

  # PATCH/PUT /highlights/1
  # PATCH/PUT /highlights/1.json
  def update
    speech_id = params[:data][:speech_id].to_i
    user_id = current_user.id
    snippets = JSON.parse(params[:data][:snippets])

    highlight = Highlight.find_by(user_id: user_id, speech_id: speech_id)

    highlight.update(snippets: JSON.parse(highlight.snippets).push(snippets).sort {|a,b| a[1] <=> b[1]})

    @highlights = highlight
    @speech = Speech.find(speech_id)
    @user = current_user


    respond_to do |format|
      format.js {}
    end
  end

  # DELETE /highlights/1
  # DELETE /highlights/1.json
  def destroy
    speech_id = params[:data][:speech_id].to_i
    highlight_id = params[:id].to_i
    user_id = current_user.id

    Highlight.find_by(speech_id: speech_id, user_id: user_id).destroy
    @speech = Speech.find(speech_id)

    respond_to do |format|
      format.js {}
    end
  end



  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_highlight
    #   @highlight = Highlight.find_by(speech_id: params[:data][:speech_id], user_id: current_user.id)
    # end

    def set_user
      #note the use of a default value since user might
      @user_id = params[:data][:user_id].to_i ||= current_user.id
      @user = User.find(@user_id)
    end

    def set_speech
      @speech_id = params[:data][:speech_id].to_i
      @speech = Speech.find(@speech_id)
    end

    def set_highlight
      # @highlight = JSON.parse(params[:data][:snippets])
      @highlights = Highlight.find_by(user_id: @user_id, speech_id: @speech_id)
    end

    # def check_highlight
    #   @highlight = Highlight.find_by(user_id: current_user.id, speech_id: params[:data][:speech_id].to_i)
    # end

    # Never trust parameters from the scary internet, only allow the white list through.
    def highlight_params
      params.require(:highlight).permit(:user_id, :speech_id, :snippets)
    end
end
