class Api::BoardsController < ApplicationController
  def show
    board = Board.find(params[:id])
    render :json => board, :include => :cards
  end

  def index
    render :json => Board.all
  end

  def create
    board = Board.new(board_params)
    if board.save!
      render :json => board
    else
      render :json => board.errors.full_messages, status: :unprocessable_entity
    end
  end

  def board_params
    params.require(:board).permit(:name)
  end
end
