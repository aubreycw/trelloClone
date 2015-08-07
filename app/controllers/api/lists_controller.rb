class ListsController < ApplicationController
  def show
    list = List.find(params[:id])
    render :json => list, :include => :cards
  end

  def index
    render :json => List.all
  end

  def create
    list = List.new(list_params)
    if list.save!
      render :json => list
    else
      render :json =>list.errors.full_messages, status: :unprocessable_entity
    end
  end

  def list_params
    params.require(:list).permit(:name)
  end

end
