import React from "react";
import CreateButton from "../buttons/CreateButton";

export default ({ action }) => {
  return (
    <div className="header indexHeader">
      <h1>Все страницы</h1>
      <CreateButton text="Создать страницу" action={action} />
    </div>
  );
};
