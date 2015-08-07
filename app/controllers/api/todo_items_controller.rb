class Api::TodoItemsController < ApplicationController
  def show
    todo_item = TodoItem.find(params[:id])
    render :json => todo_item
  end

  def index
    render :json => TodoItem.all
  end

  def create
    todo_item = TodoItem.new(todo_params)
    if todo_item.save!
      render :json => todo_item
    else
      render :json =>todo_item.errors.full_messages, status: :unprocessable_entity
    end
  end

  def todo_params
    params.require(:todo_item).permit(:name)
  end
end
