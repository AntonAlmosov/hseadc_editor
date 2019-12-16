import React from "react";

export default ({ type, innerText, action }) => {
  return (
    <div className={"default_button " + type} onClick={action}>
      {innerText}
    </div>
  );
};
