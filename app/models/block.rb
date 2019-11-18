class Block < ApplicationRecord
  belongs_to :phrase
  has_one_attached :block_image
end
