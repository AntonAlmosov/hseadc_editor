class PageController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
  end

  def show
  end

  def edit
  end

  def get_pages
    pages = Page.all
    respond_to do |format|
      format.json  { render :json => pages }
    end
  end

  def get_page
    page = Page.find(params[:id])
    blocks = []
    page.blocks.each do |block|
      blocks.push({block: block, phrases:blocks.phrases})
    end
    collection = {page: page, blocks: blocks}
    msg = { :status => "ok", :response => collection }
    render :json => msg 
  end

  def handle_create
    page = Page.new()
    page.tittle = 'Untitled'
    if page.save
      msg = { :status => "ok", :response => page }
      render :json => msg 
    end
  end

  def handle_edit
    page = Page.find(params[:id])
    page.tittle = params[:tittle]
    if page.save
        # msg = { :status => "ok", :response => collection }
        # render :json => msg }
    end
  end
end
