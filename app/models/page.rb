class Page < ApplicationRecord
  default_scope { order("updated_at") }
  has_many :blocks
end
