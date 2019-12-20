import React, { useState } from "react";
import CreateButton from "../../atoms/buttons/CreateButton";

export default ({ onClick }) => {
  return (
    <div className="creation_overlay">
      <CreateButton onClick={onClick} />
    </div>
  );
};
