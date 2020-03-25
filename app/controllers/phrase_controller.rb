class PhraseController < ApplicationController

  skip_before_action :verify_authenticity_token

  def handle_edit
    phrase = Phrase.find_by(id: params[:id])
    phrase.update(phrase_params)
  end

  def handle_destroy
    block = Block.find(params[:id])
    if block.block_image.attached?
    end
    if block.destroy
      msg = { :status => "ok" }
      render :json => msg 
    end
  end

  def handle_upload
    phrase = Phrase.find(params[:id])
    phrase.images = params[:image]
    if phrase.save!
      phrase.content = rails_blob_path(phrase.images, disposition: "attachment", only_path: true)
      phrase.save
    end
  end

  private
    def phrase_params
      params.require(:phrase).permit(:image, :content, :custom_class)
    end
  
end
