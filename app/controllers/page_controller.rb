class PageController < ApplicationController
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
    respond_to do |format|
      msg = { :status => "ok", :response => page }
      format.json  { render :json => msg }
    end
  end

  def handle_create
    page = Page.new()
    page.tittle = 'Новая страница'
    if page.save
      respond_to do |format|
        msg = { :status => "ok", :response => page }
        format.json {render json: msg}
      end
    end
  end

  def handle_edit
    page = Page.find(params[:id])
    page.tittle = params[:tittle]
    if page.save
      respond_to do |format|
        msg = { :status => "ok", :response => page }
        format.json {render json: msg}
      end
    end
  end
end
