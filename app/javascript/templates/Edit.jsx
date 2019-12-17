import React, { useState, useEffect } from "react";
import Axios from "axios";

import EditorHeader from "../components/organisms/headers/EditorHeader";
import Input from "../components/atoms/inputs/DefaultInput";
import DefaultInput from "../components/atoms/inputs/DefaultInput";

export default () => {
  const [page, setPage] = useState({ page: { title: "" }, blocks: {} });
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    get_page();
  }, []);

  useEffect(() => {
    window.document.title = "Editor – " + page.page.title;
  }, [page]);

  let get_page = () => {
    let page_id = window.location.pathname.split("/")[2];
    Axios.post("/page/get_page", { id: page_id }).then(res =>
      setPage(res.data.response)
    );
  };

  return (
    <div className="default_page">
      <EditorHeader onSaveClick={() => console.log("click")} filled={filled} />
      <DefaultInput label="Label" placeholder="Type Text" />
    </div>
  );
};
