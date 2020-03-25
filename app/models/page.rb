class Page < ApplicationRecord
  default_scope { order("updated_at") }
  
  has_one_attached :cover
  has_many :blocks
end
