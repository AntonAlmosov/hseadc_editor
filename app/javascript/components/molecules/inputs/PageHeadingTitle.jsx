import React from "react";

import Textarea from "react-textarea-autosize";

export default ({ defaultValue, name }) => {
  return (
    <div className="page_heading_input">
      <Textarea
        autoComplete="off"
        name={name}
        type="text"
        defaultValue={defaultValue == "Untitled" ? null : defaultValue}
        placeholder={"Untitled..."}
      />
    </div>
  );
};
