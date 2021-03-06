class SpeechesController < ApplicationController
  before_action :set_speech, only: [:show, :edit, :update, :destroy]

  # GET /speeches
  # GET /speeches.json
  def index
    @speeches = Speech.all
    # @speeches = Speech.all.paginate(page: params[:page], per_page: 10)
    # filter_li used to show filter options
    @search_lis = true
  end

  # GET /speeches/1
  # GET /speeches/1.json
  def show

    #violates DRY
    gon.speech_id = @speech.id
    gon.speech = @speech
    if current_user
      gon.user_id = User.find(current_user.id).id
      # code below searches if the user has an existing highlight
      # Highlight.find_by(user_id: @current_user.id, speech_id: @speech.id)
      if highlight = Highlight.find_by(speech_id: @speech.id, user_id: User.find(current_user.id).id)
        gon.highlight_id = highlight.id
        gon.snippets = highlight.snippets
      end

    end


    #markup_li is used to show the markup panel
    @markup_li = true
  end

  # GET /speeches/new
  def new
    @speech = Speech.new
  end

  # GET /speeches/1/edit
  def edit
  end

  # POST /speeches
  # POST /speeches.json
  def create
    @speech = Speech.new(speech_params)
    @speech.creator_id = current_user.id
    # @speech.speech_date = Date.new(@speech.speech_date[6..9].to_f, @speech.speech_date[3..4].to_f, @speech.speech_date[0..1].to_f)

    respond_to do |format|
      if @speech.save
        format.html { redirect_to @speech, notice: 'Speech was successfully created.' }
        format.json { render :show, status: :created, location: @speech }
      else
        format.html { render :new }
        format.json { render json: @speech.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /speeches/1
  # PATCH/PUT /speeches/1.json
  def update
    respond_to do |format|
      if @speech.update(speech_params)
        format.html { redirect_to @speech, notice: 'Speech was successfully updated.' }
        format.json { render :show, status: :ok, location: @speech }
      else
        format.html { render :edit }
        format.json { render json: @speech.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /speeches/1
  # DELETE /speeches/1.json
  def destroy
    @speech.destroy
    respond_to do |format|
      format.html { redirect_to speeches_url, notice: 'Speech was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_speech
      @speech = Speech.find(params[:id])
    end

    # def set_user
    #   #note the use of a default value since user might
    #   @selected_user = params[:data][:user_id].to_i
    #   @current_user = current_user
    # end

    # Never trust parameters from the scary internet, only allow the white list through.
    def speech_params
      params.require(:speech).permit(:title, :content, :speech_date, :created_date, :venue, :city, :state, :first_name, :last_name, :public_figure_id, :creator_id, :approved, :tags)
    end
end
