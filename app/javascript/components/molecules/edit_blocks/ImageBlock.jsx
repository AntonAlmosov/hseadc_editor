import React, { useState, useEffect } from "react";

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
    <div className={url ? "image_block default" : "image_block without_image"}>
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
  );
};
