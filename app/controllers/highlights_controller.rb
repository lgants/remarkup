class HighlightsController < ApplicationController
  before_action :set_highlight, only: [:edit, :update]
  # before action check_highlight used to check whether highlight alread exists


  def create_or_update_selection


  end



  def load_selection
    # this is all relative to the selected user (current or otherwise) and speech

    user_id = JSON.parse(params[:data][:user_id])
    speech_id = JSON.parse(params[:data][:speech_id])

    @user = User.find(user_id)
    @highlights = Highlight.find_by(user_id: user_id, speech_id: speech_id)
    @speech = Speech.find(speech_id)
    @current_user = current_user

    respond_to do |format|
      format.js {}
    end
  end


  # GET /highlights
  # GET /highlights.json
  def index
    @highlight = Highlight.all
  end

  # GET /highlights/1
  # GET /highlights/1.json
  def show
  end

  # GET /highlights/new
  def new
    @highlight = Highlight.new
  end

  # GET /highlights/1/edit
  def edit
  end



  # POST /highlights
  # POST /highlights.json
  def create
    # this needs to be refactored
    highlight = Highlight.new()
    highlight.user_id = current_user.id
    highlight.speech_id = params[:data][:speech_id].to_i
    highlight.snippets = params[:data][:snippets]

    @snippets = highlight.snippets
    @speech = highlight.speech
    @user = User.find(current_user.id)

    respond_to do |format|
      if highlight.save
        format.js
      else
        format.html { render :new }
        format.json { render json: highlight.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /highlights/1
  # PATCH/PUT /highlights/1.json
  def update
    respond_to do |format|
      if @highlight.update(snippets: params[:data][:snippets])
        format.html { redirect_to "/speeches/#{params[:data][:speech_id]}", notice: 'Highlight was successfully updated.' }
        format.json { render :show, status: :ok, location: "/speeches/#{params[:data][:speech_id]}"}
      else
        format.html { render :edit }
        format.json { render json: @highlight.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /highlights/1
  # DELETE /highlights/1.json
  def destroy
    @highlight = Highlight.find(params[:id])
    @highlight.destroy
    respond_to do |format|
      format.html { redirect_to root_path, notice: 'Highlight was successfully destroyed.' }
      format.json { head :no_content }
    end
  end


  # def highlight_id
  #   respond_to do |format|
  #     format.js { render :json => @highlight.id }
  #   end
  # end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_highlight
      @highlight = Highlight.find_by(speech_id: params[:data][:speech_id], user_id: current_user.id)
    end

    # def check_highlight
    #   @highlight = Highlight.find_by(user_id: current_user.id, speech_id: params[:data][:speech_id].to_i)
    # end

    # Never trust parameters from the scary internet, only allow the white list through.
    def highlight_params
      params.require(:highlight).permit(:user_id, :speech_id, :snippets)
    end
end
