class Phrase < ApplicationRecord
  has_one_attched :image
  belongs_to :block
end
