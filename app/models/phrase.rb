class Phrase < ApplicationRecord
  default_scope { order(:created_at) }
  has_many :blocks
  belongs_to :page
end
