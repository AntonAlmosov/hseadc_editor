import React from "react";

export default ({ defaultValue, name }) => {
  return (
    <div className="page_heading_input">
      <input
        autoComplete="off"
        name={name}
        type="text"
        defaultValue={defaultValue == "Untitled" ? null : defaultValue}
        placeholder={"Untitled..."}
      />
    </div>
  );
};
