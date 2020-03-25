import React from "react";

import LogoButton from "../../atoms/buttons/LogoButton";
import HeaderMoreButton from "../../atoms/buttons/HeaderMoreButton";
import DefaultButton from "../../atoms/buttons/DefaultButton";

export default ({ onSaveClick, filled }) => {
  return (
    <div className="header edit_header">
      <LogoButton />
      <div className="header_buttons">
        <DefaultButton
          onClick={onSaveClick}
          label="Сохранить"
          use={filled ? "active" : "inactive"}
        />
        <HeaderMoreButton />
      </div>
    </div>
  );
};
