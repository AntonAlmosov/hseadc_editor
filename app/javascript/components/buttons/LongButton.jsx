import React from "react";

export default ({ text, action }) => {
  return (
    <div className="longButton createPage" onClick={action}>
      {text}
    </div>
  );
};
