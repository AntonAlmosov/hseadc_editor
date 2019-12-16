class Phrase < ApplicationRecord
  after_create :set_image_url

  has_one_attched :image
  belongs_to :block

  def set_image_url
    if self.phrase_type == 'image'
      self.update(content: rails_blob_path(self.image, disposition: "attachment", only_path: true))
    end
  end

  def destroy_image
    if self.phrase_type == 'image'
      self.image.destroy
    end
  end
end
