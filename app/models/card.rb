# == Schema Information
#
# Table name: cards
#
#  id         :integer          not null, primary key
#  name       :text             not null
#  list_id    :integer          not null
#  ord        :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Card < ActiveRecord::Base
  validates :name, :list, :ord, presence: true

  belongs_to :list

  has_many :todo_items
end
