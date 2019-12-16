import React from "react";

export default ({ use, label, onClick }) => {
  return (
    <div className={"default_button " + use} onClick={onClick}>
      {label}
    </div>
  );
};
