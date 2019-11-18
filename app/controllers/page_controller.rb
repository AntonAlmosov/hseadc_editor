class PageController < ApplicationController
  def index
    pages = Page.all
    collection = []
    pages.each do |p|
      collection.push({id: p.id, tittle: p.tittle})
    end
    respond_to do |format|
      format.json { json: => {status: 'ok', response: collection}}
    end
  end

  def show
    page = Page.find(params[:id])
    respond_to do |format|
      format.json { json: => {status: 'ok', response: page}}
    end
  end

  def edit
    page = Page.find(params[:id])
    respond_to do |format|
      format.json { json: => {status: 'ok', response: page}}
    end
  end

  def handle_edit
    page = Page.find(params[:id])
    page.tittle = params[:tittle]
    if page.save
      respond_to do |format|
        format.json { json: => {status: 'ok', response: page}}
      end
    end
  end
end
