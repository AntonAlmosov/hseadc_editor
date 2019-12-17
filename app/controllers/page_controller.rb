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
    render :json => pages 
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
    page = Page.create(page_create_params)
    render :json => {:status => 'ok', :page_id => page.id}
  end

  def handle_edit
    page = Page.find(params[:id])
    page.title = params[:title]
    if page.save
        # msg = { :status => "ok", :response => collection }
        # render :json => msg }
    end
  end

  private 
    def page_create_params
      params.require(:page).permit(:title, :published)
    end
end
