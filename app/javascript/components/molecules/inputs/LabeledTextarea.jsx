import React, { useState, useEffect } from "react";
import Textarea from "react-textarea-autosize";
import pluralize from "pluralize";

export default ({ defaultValue, label, name }) => {
  const [focused, setFocused] = useState(false);
  const [cap, setCap] = useState(400 - defaultValue.length);

  let change_label = () => {
    setFocused(!focused);
  };

  let textarea_helper = value => {
    setCap(400 - value.length);
  };

  return (
    <div className="labeled_textarea">
      <div className="textarea_heading">
        <div
          className={
            focused ? "textarea_label active" : "textarea_label normal"
          }
        >
          {label}
        </div>
        <div className="textarea_symbols">
          {cap + " " + pluralize("symbol", cap) + " left"}
        </div>
      </div>
      <Textarea
        name={name}
        onFocus={change_label}
        onBlur={change_label}
        onChange={e => textarea_helper(e.target.value)}
        maxLength={400}
        className="heading_textarea"
        defaultValue={defaultValue}
        placeholder={"Describe your project in a few words..."}
      />
    </div>
  );
};
