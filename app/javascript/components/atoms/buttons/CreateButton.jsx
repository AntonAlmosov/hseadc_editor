import React from "react";

export default ({ onClick }) => {
  return (
    <div className="create_button" onClick={onClick}>
      <div className="create_button_icon"></div>
    </div>
  );
};
