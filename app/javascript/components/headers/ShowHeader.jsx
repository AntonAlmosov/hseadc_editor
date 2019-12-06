import React from "react";
import EditButton from "../buttons/EditButton";
import axios from "axios";

export default ({ tittle, id }) => {
  let editHeading = (e, id) => {
    axios.post("/page/handle_edit", { tittle: e.target.value, id: id });
  };

  return (
    <div className="header indexHeader">
      <h1>
        <a href="/" target="_self">
          Все страницы /
        </a>{" "}
        {tittle}
      </h1>
      <EditButton text="Редактировать" id={id} />
    </div>
  );
};
