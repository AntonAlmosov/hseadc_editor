import React, { useState } from "react";
import CreateButton from "./CreateButton";
import Axios from "axios";

export default ({ id, action }) => {
  const [type, setType] = useState("heading");
  const [width, setWidth] = useState("half");

  return (
    <div className="createBlockButton">
      <div className="row">
        <div className="blocksType">
          <div
            className={type == "heading" ? "typeActive" : "typeInactive"}
            onClick={() => setType("heading")}
          >
            H
          </div>
          <div
            className={type == "paragraph" ? "typeActive" : "typeInactive"}
            onClick={() => setType("paragraph")}
          >
            P
          </div>
          <div
            className={type == "spacer" ? "typeActive" : "typeInactive"}
            onClick={() => setType("spacer")}
          >
            S
          </div>
          <div
            className={type == "image" ? "typeActive" : "typeInactive"}
            onClick={() => setType("image")}
          >
            I
          </div>
        </div>
        <div className="blocksWidth">
          <div
            className={width == "full" ? "typeActive" : "typeInactive"}
            onClick={() => setWidth("full")}
          >
            1/1
          </div>
          <div
            className={width == "half" ? "typeActive" : "typeInactive"}
            onClick={() => setWidth("half")}
          >
            1/2
          </div>
        </div>
      </div>
      <CreateButton text="Добавить" action={() => action(id, type, width)} />
    </div>
  );
};
