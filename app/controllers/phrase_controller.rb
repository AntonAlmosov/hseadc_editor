class PhraseController < ApplicationController

  skip_before_action :verify_authenticity_token

  def handle_create
    page = Page.find(params[:page_id])
    phrase = page.phrases.new()
    if phrase.save 
      msg = { :status => "ok", :response => phrase }
      render :json => msg 
    end
  end

  def handle_edit
    phrase = Phrase.find(params[:id])
    phrase.order = params[:order]
    if phrase.save
      msg = { :status => "ok", :response => phrase }
      render :json => msg 
    end
  end

  def handle_destroy
    phrase = Phrase.find(params[:id])
    if phrase.destroy 
      msg = { :status => "ok", :response => phrase }
      render :json => msg 
    end
  end
  
end
