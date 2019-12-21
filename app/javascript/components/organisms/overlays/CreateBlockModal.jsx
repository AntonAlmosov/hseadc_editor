import React from "react";
import Scrollable from "react-custom-scrollbars";

export default ({ close, createBlock }) => {
  return (
    <>
      <div className="create_block_header">
        <h1>Layouts</h1>
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
          className="create_block_card image_image_block"
          onClick={() => createBlock("image_image")}
        ></div>
        <div
          className="create_block_card heading_text_image_block"
          onClick={() => createBlock("heading_text_image")}
        ></div>
        <div
          className="create_block_card text_text_block"
          onClick={() => createBlock("text_text")}
        ></div>
        <div
          className="create_block_card image_heading_text_block"
          onClick={() => createBlock("image_heading_text")}
        ></div>
      </div>
    </>
  );
};
