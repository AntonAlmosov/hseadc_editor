import React from "react";

export default ({ text, action }) => {
  return (
    <div className="button createPage" onClick={action}>
      {text}
    </div>
  );
};
