class Api::LooksController < ApplicationController
  
end
before_action :set_look, only: [:show, :update, :destroy]

  def index
    render json: Look.all
  end

  def show
    render json: @look
  end

  def create
    look = Look.new(look_params)

    if look.save
      render json: look
    else
      render json: look.errors, status: 422
    end
  end

  def update
    if @look.update(look_params)
      render json: @look
    else
      render json: @look.errors, status: 422
    end
  end

  def destroy
    @look.destroy
  end

  private
    def set_product
      @look = Look.find(params[:id])
    end

    def look_params
      params.require(:look).permit(:post, :author)
    end