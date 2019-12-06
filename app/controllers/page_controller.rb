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
    collection = []
    pages.each do |p|
      collection.push({id: p.id, tittle: p.tittle})
    end
    respond_to do |format|
      msg = { :status => "ok", :response => collection }
      format.json  { render :json => msg }
    end
  end

  def get_page
    page = Page.find(params[:id])
    phrasesCol = []
    page.phrases.each do |phrase|
      phrasesCol.push({id: phrase.id, blocks:phrase.blocks})
    end
    collection = {tittle: page.tittle, phrases: phrasesCol}
    msg = { :status => "ok", :response => collection }
    render :json => msg 
  end

  def handle_create
    page = Page.new()
    page.tittle = 'Новая страница'
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
