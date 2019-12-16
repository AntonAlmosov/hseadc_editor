class BlockController < ApplicationController

  skip_before_action :verify_authenticity_token

  def handle_create
    page = Page.find(params[:page_id])
    page.blocks.create(block_params)
  end

  def handle_destroy
    block = Block.find(params[:id])
    block.phrases.destroy_all
    block.destroy 
  end

  private
    def block_params
      params.require(:block).permit(:block_type)
    end
end
