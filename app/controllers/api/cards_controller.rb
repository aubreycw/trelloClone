class CardsController < ApplicationController
  def show
    card = Card.find(params[:id])
    render :json => card, :include => :todo_items
  end

  def index
    render :json => Card.all
  end

  def create
    card = Card.new(card_params)
    if card.save!
      render :json => card
    else
      render :json => Card.errors.full_messages, status: :unprocessable_entity
    end
  end

  def card_params
    params.require(:card).permit(:name)
  end
end
