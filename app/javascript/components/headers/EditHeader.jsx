import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateButton from "../buttons/CreateButton";

export default ({ tittle, id }) => {
  const [width, setWidth] = useState(17);

  useEffect(() => {
    setWidth(tittle.length);
  }, [tittle]);

  let editHeading = (tittle, id) => {
    axios.post("/page/handle_edit", { tittle: tittle, id: id });
  };

  return (
    <div className="header indexHeader">
      <h1>
        <a href={"/page/" + id} target="_self">
          ... /
        </a>{" "}
        <input
          size={width + 1}
          defaultValue={tittle}
          onClick={e => {
            setWidth(e.target.value.length);
          }}
          onChange={e => {
            setWidth(e.target.value.length);
          }}
          onBlur={e => editHeading(e.target.value, id)}
        />{" "}
        <span>{" / Редактирование"}</span>
      </h1>
      <CreateButton text="Сохранить" action={() => console.log("click")} />
    </div>
  );
};
