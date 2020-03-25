import React from "react";
import Scrollable from "react-custom-scrollbars";

export default ({ close, createBlock }) => {
  return (
    <>
      <div className="create_block_header">
        <h1>Лейауты</h1>
        <div className="create_block_close" onClick={close}></div>
      </div>
      <div className="create_block_cards">
        <div
          className="create_block_card image_block"
          onClick={() => createBlock("image")}
        ></div>
        <div
          className="create_block_card heading_text_block"
          onClick={() => createBlock("heading_text")}
        ></div>
        <div
          className="create_block_card image_text_block"
          onClick={() => createBlock("image_text")}
        ></div>
        <div
          className="create_block_card feature_block"
          onClick={() => createBlock("feature")}
        ></div>
        <div
          className="create_block_card text_block"
          onClick={() => createBlock("text")}
        ></div>
        <div
          className="create_block_card heading_caption_text_block"
          onClick={() => createBlock("heading_caption_text")}
        ></div>
      </div>
    </>
  );
};
