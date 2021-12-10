class DemoimgsController < ApplicationController
  before_action :set_demoimg, only: %i[ show edit update destroy ]

  # GET /demoimgs or /demoimgs.json
  def index
    @demoimgs = Demoimg.all
  end

  # GET /demoimgs/1 or /demoimgs/1.json
  def show
  end

  # GET /demoimgs/new
  def new
    @demoimg = Demoimg.new
  end

  # GET /demoimgs/1/edit
  def edit
  end

  # POST /demoimgs or /demoimgs.json
  def create
    @demoimg = Demoimg.new(demoimg_params)

    respond_to do |format|
      if @demoimg.save
        format.html { redirect_to @demoimg, notice: "Demoimg was successfully created." }
        format.json { render :show, status: :created, location: @demoimg }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @demoimg.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /demoimgs/1 or /demoimgs/1.json
  def update
    respond_to do |format|
      if @demoimg.update(demoimg_params)
        format.html { redirect_to @demoimg, notice: "Demoimg was successfully updated." }
        format.json { render :show, status: :ok, location: @demoimg }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @demoimg.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /demoimgs/1 or /demoimgs/1.json
  def destroy
    @demoimg.destroy
    respond_to do |format|
      format.html { redirect_to demoimgs_url, notice: "Demoimg was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_demoimg
      @demoimg = Demoimg.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def demoimg_params
      params.require(:demoimg).permit(:name, :img)
    end
end
