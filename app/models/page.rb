class Page < ApplicationRecord
  default_scope { order(:created_at) }
  has_many :phrases
end
