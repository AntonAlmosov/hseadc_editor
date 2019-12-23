import React from "react";

import MoreButton from "../../atoms/buttons/CardMoreButton";

export default ({ title, page_id, published, image }) => {
  return (
    <a href={"page/" + page_id + "/edit"} target="_self" className="page_card">
      <div className="heading">
        <div className="title">
          <h1>{title}</h1>
          <div
            className={published ? "eye published" : "eye unpublished"}
          ></div>
        </div>
        {/* <MoreButton page_id={page_id} /> */}
      </div>
      <div className={image ? "cover placeholder" : "cover"}>
        {image != "" && <img src={image} alt="" />}
      </div>
    </a>
  );
};
