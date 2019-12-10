class Block < ApplicationRecord
  has_many :phrases
  belongs_to :page
end
