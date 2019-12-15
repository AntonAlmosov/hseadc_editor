class Block < ApplicationRecord
  after_create :create_phrases

  has_many :phrases
  belongs_to :page

  def create_phrases
    phrases = self.block_type.split('_')
    phrases.each do |phrase, i|
      self.phrases.create(phrase_type: phrase, position: i)
    end
  end
end