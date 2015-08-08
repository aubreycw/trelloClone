class Api::ListsController < ApplicationController
  def show
    list = List.find_by(params.permit(:id, :board_id))
    render :json => list
  end

  def index
    board = Board.find(params[:board_id])
    render :json => board.lists
  end

  def create
    list = List.new(list_params)
    if list.save!
      render :json => list
    else
      render :json =>list.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    list = List.find(params[:id])
    list.destroy()
    render :json => Board.all
  end

  def list_params
    params.require(:list).permit(:name)
  end

end
