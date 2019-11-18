class Block < ApplicationRecord
  default_scope { order(:created_at) }
  belongs_to :phrase
  has_one_attached :block_image
end
