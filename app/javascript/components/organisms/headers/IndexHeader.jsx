import React from "react";

import LogoButton from "../../atoms/buttons/LogoButton";
import HeaderSearchInput from "../../molecules/inputs/HeaderSearchInput";
import DefaultButton from "../../atoms/buttons/DefaultButton";

export default ({ onCreateClick, onSearch }) => {
  return (
    <div className="header index_header">
      <LogoButton />
      <HeaderSearchInput onChange={value => onSearch(value)} />
      <DefaultButton onClick={onCreateClick} label="New Page" use="active" />
    </div>
  );
};
