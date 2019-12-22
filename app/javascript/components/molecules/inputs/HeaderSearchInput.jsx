import React, { useState } from "react";

export default ({ onChange }) => {
  const [focus, setFocus] = useState(false);
  const [empty, setEmpty] = useState(true);

  let handleChange = value => {
    value.length > 0 ? setEmpty(false) : setEmpty(true);
    onChange(value);
  };

  let handleWipe = () => {
    document.querySelector(".header_search_input > input").value = "";
    handleChange("");
  };

  return (
    <div className="header_search_input">
      <div className="search_icon"></div>
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={e => handleChange(e.target.value)}
        className={focus ? "focused" : "unfocused"}
        placeholder="Search..."
      />
      {!empty && <div className="wipe_icon" onClick={handleWipe}></div>}
    </div>
  );
};
