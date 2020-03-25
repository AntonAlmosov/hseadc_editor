import React from "react";

import PageHeadingTitle from "../../molecules/inputs/PageHeadingTitle";
import DefaultInput from "../../molecules/inputs/DefaultInput";
import LabeledTextarea from "../../molecules/inputs/LabeledTextarea";

export default ({ page, onChange, cover }) => {
  const [url, setUrl] = React.useState(cover);

  React.useEffect(() => {
    setUrl(cover);
  }, [cover]);

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
    <form className="page_edit_wrapper" onChange={onChange}>
      <PageHeadingTitle defaultValue={page.title} name="title" />
      <div className="divider"></div>
      <div className="page_edit_info">
        <div className="page_edit_labels">
          <DefaultInput
            placeholder={"Введите имя"}
            label={"Команда"}
            name={"team"}
            defaultValue={page.team}
          />
        </div>
        <LabeledTextarea
          name={"description"}
          label={"Описание"}
          defaultValue={page.description ? page.description : ""}
        />
      </div>
      <div
        className={url ? "image_block default" : "image_block without_image"}
        style={{ marginTop: 41, marginBottom: 130, width: "100%", height: 645 }}
      >
        {url && (
          <img
            src={url}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        )}
        <div className="image_block_uploader">
          <input
            style={{ display: "none" }}
            type="file"
            id={"cover-image"}
            name={"cover"}
            onChange={e => handle_url(e.target)}
          />
          <label htmlFor={"cover-image"}>
            <div className="image_block_label"></div>
          </label>
        </div>
      </div>
    </form>
  );
};
