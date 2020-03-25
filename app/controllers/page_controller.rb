class PageController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
  end

  def show
  end

  def edit
  end

  def update
    page = Page.find(params[:id])
    page.update(page_params)
  end

  def get_pages
    pages = Page.all
    res = []
    pages.each do |page|
      if page.cover.attached?
        res.push({title: page.title, published: page.published, id: page.id, team: page.team, description: page.description, cover: polymorphic_url(page.cover)})
      else
        res.push({title: page.title, published: page.published, id: page.id, team: page.team, description: page.description})
      end
    end
    render :json => res
  end

  def get_page
    page = Page.find(params[:id])
    blocks = []
    page.blocks.each do |block|
      blocks.push({block: block, phrases:block.phrases})
    end
    collection = {}
    if page.cover.attached?
      collection = {page: page, blocks: blocks, cover: polymorphic_url(page.cover)}
    else
      collection = {page: page, blocks: blocks, cover: ''}
    end

    msg = { :status => "ok", :response => collection }
    render :json => {response: collection}
  end

  def handle_create
    page = Page.create(page_create_params)
    render :json => {:status => 'ok', :page_id => page.id}
  end

  def handle_edit
    page = Page.find(params[:id])
    if params.has_key?(:cover)
      page.update({title: params[:title], description: params[:description], team: params[:team], cover: params[:cover]})
    else
      page.update({title: params[:title], description: params[:description], team: params[:team]})
    end
  end

  private 
    def page_create_params
      params.require(:page).permit(:title, :published)
    end
    def page_params
      params.require(:page).permit(:title, :team, :description, :cover)
    end
end
