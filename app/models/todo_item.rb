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

class TodoItem < ActiveRecord::Base
  validate :ensure_unchecked
  validates :name, :card, :checked, presence: true

  belongs_to :card

  def ensure_unchecked
    @checked = false
  end

  def checked?
    @checked = @checked || :checked
    @checked
  end

  def check!
    @checked = true
  end

end
