class HighlightsController < ApplicationController
  before_action :set_user, only: [:show, :update]
  before_action :set_speech, only: [:show, :destroy, :update]
  before_action :set_highlight, only: [:show, :update]
  before_action :set_snippet, only: [:update]
  # before_action :find, only: [:show, :create, :update, :destroy]
  # before action check_highlight used to check whether highlight alread exists

  # GET /highlights/1
  # GET /highlights/1.json
  def show
    respond_to do |format|
      format.js {}
    end
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
    @selected_user = current_user


    respond_to do |format|
      format.js {}
    end
  end

  # PATCH/PUT /highlights/1
  # PATCH/PUT /highlights/1.json
  def update
    @highlight.add_snippet(@snippet)

    respond_to do |format|
      format.js {}
    end
  end

  # DELETE /highlights/1
  # DELETE /highlights/1.json
  def destroy
    highlight_id = params[:id].to_i
    user_id = current_user.id

    Highlight.find_by(speech_id: @speech_id, user_id: user_id).destroy

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
      #note the use of a default value
      # calling to_i on nil, results in 0, so ||= operator won't work as desired
      if params[:data][:user_id].nil?
        @selected_user_id = current_user.id
        @selected_user = current_user
      else
        @selected_user_id = params[:data][:user_id].to_i
        @selected_user = User.find(@selected_user_id)
      end

    end

    def set_speech
      @speech_id = params[:data][:speech_id].to_i
      @speech = Speech.find(@speech_id)
    end

    def set_highlight
      # highlight object
      @highlight = Highlight.find_by(user_id: @selected_user_id, speech_id: @speech_id)
    end

    def set_snippet
      @snippet = JSON.parse(params[:data][:snippets])
    end

    # def set_snippets
    #   binding.pry
    #   # current snippets in an nested array value (not string)
    #   @cur_snippets = JSON.parse(@highlight.snippets) || []
    #   # current snippets in an array value (not string)
    #   @new_snippet = JSON.parse(params[:data][:snippets])
    # end

    # def check_highlight
    #   @highlight = Highlight.find_by(user_id: current_user.id, speech_id: params[:data][:speech_id].to_i)
    # end

    # Never trust parameters from the scary internet, only allow the white list through.
    def highlight_params
      params.require(:highlight).permit(:user_id, :speech_id, :snippets)
    end
end
