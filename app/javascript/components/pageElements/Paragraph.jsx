import React from "react";

export default ({ content, width }) => {
  return (
    <div className={"block " + width}>
      <p>{content}</p>
    </div>
  );
};
