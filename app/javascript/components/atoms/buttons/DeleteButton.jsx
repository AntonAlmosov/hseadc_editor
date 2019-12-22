import React from "react";

export default ({ onClick, id }) => {
  return <div className="delete_button" onClick={() => onClick(id)}></div>;
};
