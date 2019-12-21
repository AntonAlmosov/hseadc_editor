import React, { useState } from "react";
import Textarea from "react-textarea-autosize";

export default ({ phrases }) => {
  const [url, setUrl] = useState(phrases[0].content);
  const [secondUrl, setSecondUrl] = useState(phrases[1].content);

  let handle_url = input => {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        setUrl(e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  let second_handle_url = input => {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        setSecondUrl(e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  return (
    <div className="image_image_block_edit">
      <div
        className={url ? "image_block default" : "image_block without_image"}
      >
        {url && <img src={url} />}
        <div className="image_block_uploader">
          <input
            className="phrase_image"
            type="file"
            id={"phrase_" + phrases[0].id}
            onChange={e => handle_url(e.target)}
          />
          <label htmlFor={"phrase_" + phrases[0].id}>
            <div className="image_block_label"></div>
          </label>
        </div>
      </div>
      <div
        className={
          secondUrl ? "image_block default" : "image_block without_image"
        }
      >
        {secondUrl && <img src={secondUrl} />}
        <div className="image_block_uploader">
          <input
            className="phrase_image"
            type="file"
            id={"phrase_" + phrases[1].id}
            onChange={e => second_handle_url(e.target)}
          />
          <label htmlFor={"phrase_" + phrases[1].id}>
            <div className="image_block_label"></div>
          </label>
        </div>
      </div>
    </div>
  );
};
