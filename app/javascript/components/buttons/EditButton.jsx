import React from "react";

export default ({ text, id }) => {
  return (
    <a
      className="button createPage"
      href={"/page/" + id + "/edit"}
      target="_self"
    >
      {text}
    </a>
  );
};
