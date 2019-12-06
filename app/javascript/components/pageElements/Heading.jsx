import React from "react";

export default ({ content, width }) => {
  return (
    <div className={"block " + width}>
      <h1>{content}</h1>
    </div>
  );
};
