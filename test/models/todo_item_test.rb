# == Schema Information
#
# Table name: todo_items
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  card_id    :integer          not null
#  checked    :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class TodoItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
