import React from "react";
import ReactDOM from "react-dom";
import Index from "../templates/Index";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Index />,
    document.body.appendChild(document.createElement("div"))
  );
});
