import React, { useState } from "react";

export default ({ label, placeholder, defaultValue, name }) => {
  const [focused, setFocused] = useState(false);
  let change_label = () => {
    setFocused(!focused);
  };
  return (
    <div className="default_input">
      <div className={focused ? "input_label active" : "input_label normal"}>
        {label}
      </div>
      <input
        autoComplete="off"
        name={name}
        type="text"
        onFocus={change_label}
        onBlur={change_label}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
};
