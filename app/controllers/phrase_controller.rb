class PhraseController < ApplicationController
  def handle_create
    page = Page.find(params[:page_id])
    phrase = page.phrases.new()
    if phrase.save 
      respond_to do |format|
        format.json { json: => {status: 'ok', response: phrase}}
      end
    end
  end

  def handle_edit
    phrase = Phrase.find(params[:id])
    phrase.order = params[:order]
    if phrase.save? 
      respond_to do |format|
        format.json { json: => {status: 'ok', response: phrase}}
      end
    end
  end
end
