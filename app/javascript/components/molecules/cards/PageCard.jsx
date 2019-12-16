import React from "react";

export default ({ tittle, page_id }) => {
  return (
    <a href={"page/" + page_id} target="_self" className="pageCard">
      <div className="cover"></div>
      <div className="tittle">
        <h1>{tittle}</h1>
      </div>
    </a>
  );
};
