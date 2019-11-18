class Phrase < ApplicationRecord
  has_many :blocks
  belongs_to :page
end
