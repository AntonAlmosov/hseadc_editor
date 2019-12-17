import React, { useState } from "react";

export default ({ label, placeholder }) => {
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
        type="text"
        onFocus={change_label}
        onBlur={change_label}
        placeholder={placeholder}
      />
    </div>
  );
};
