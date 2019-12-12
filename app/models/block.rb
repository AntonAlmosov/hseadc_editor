class Block < ApplicationRecord
  after_create :create_phrases

  has_many :phrases
  belongs_to :page

  def create_phrases
    if self.block_type == 'heading__text_image'
      self.phrases.create(phrase_type: 'heading', position: 1)
      self.phrases.create(phrase_type: 'text', position: 2)
      self.phrases.create(phrase_type: 'image', position: 3)
    end
  end
end