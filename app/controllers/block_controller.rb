class BlockController < ApplicationController
  def handle_create
    phrase = Phrase.find(params[:phrase_id])
    block = phrase.blocks.new()
    block.type = params[:type]
    block.width = params[:width]
    if block.save
      respond_to do |format|
        format.json { json: => {status: 'ok', responce: block} }
      end
    end
  end

  def handle_edit
    block = Block.find(parmas[:id])
    block[params[:attr]] = params[:value]
    if block.save
      respond_to do |format|
        format.json { json: => {status: 'ok', responce: block} }
      end
    end
  end

  def handle_destroy
    block = Block.find(params[:id])
    if block.block_image.attached?
    end
    if block.destroy
      respond_to do |format|
        format.json { json: => {status: 'ok'}
      end
    end
  end

  def handle_upload
    block = Block.find(params[:id])
    block.block_image = params[:image]
    block.content = rails_blob_path(block.block_image, disposition: "attachment", only_path: true)
    if block.save
      respond_to do |format|
        format.json { json: => {status: 'ok', responce: block} }
      end
    end
  end
end
