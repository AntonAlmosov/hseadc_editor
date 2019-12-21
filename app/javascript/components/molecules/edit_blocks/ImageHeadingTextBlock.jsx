import React, { useState } from "react";
import Textarea from "react-textarea-autosize";

export default ({ phrases }) => {
  const [url, setUrl] = useState(phrases[0].content);

  let handle_url = input => {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        setUrl(e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  };
  return (
    <div className="image_heading_text_block">
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
      <div className="edit_column">
        <Textarea
          name={phrases[1].id}
          className="phrase heading"
          defaultValue={phrases[1].content}
          placeholder="And write something important here... Everything you want. In one abstact 🌈"
        />
        <Textarea
          name={phrases[2].id}
          className="phrase text"
          defaultValue={phrases[2].content}
          placeholder={
            "And write something important here... Everything you want. In one abstact 🌈"
          }
        />
      </div>
    </div>
  );
};
