import React, { useState, useEffect } from "react";
import Textarea from "react-textarea-autosize";
import plural from "plural-ru";

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
          {cap + " " + plural(cap, "символ", "символа", "символов")}
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
        placeholder={"Расскажи пару слов о своем проекте..."}
      />
    </div>
  );
};
