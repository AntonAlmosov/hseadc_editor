class Phrase < ApplicationRecord
  # after_update :create_phrases
  default_scope { order("created_at") }

  has_one_attched :image
  belongs_to :block
  
  # def create_phrases
  #   if self.phrase_type == 'image'
  #     self.update(content: rails_blob_path(self.image, disposition: "attachment", only_path: true))
  #   end
  # end

end
