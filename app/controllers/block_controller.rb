class BlockController < ApplicationController

  skip_before_action :verify_authenticity_token

  def handle_create
    phrase = Phrase.find(params[:phrase_id])
    block = phrase.blocks.new()
    block.block_type = params[:type]
    block.width = params[:width]
    if block.save
      msg = { :status => "ok", :response => block }
      render :json => msg 
    end
  end

  def handle_edit
    block = Block.find(params[:id])
    block[params[:attr]] = params[:value]
    if block.save
      msg = { :status => "ok", :response => block }
      render :json => msg 
    end
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
    block = Block.find(params[:id])
    block.block_image = params[:image]
    block.content = rails_blob_path(block.block_image, disposition: "attachment", only_path: true)
    if block.save
      msg = { :status => "ok", :response => block }
      render :json => msg 
    end
  end
end
