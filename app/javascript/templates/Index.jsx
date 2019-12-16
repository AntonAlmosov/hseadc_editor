import React, { useState, useEffect } from "react";
// import IndexHeader from "../components/headers/IndexHeader";
// import PageCard from "../components/cards/PageCard";
import DefaultButton from "../components/atoms/buttons/DefaultButton";
import Axios from "axios";

export default () => {
  const [pages, setPages] = useState([]);

  return (
    <div className="">
      <DefaultButton
        action={() => console.log("click")}
        innerText="Button"
        type="active"
      />
    </div>
  );
};
