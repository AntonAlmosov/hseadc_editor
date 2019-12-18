import React, { useState, useEffect } from "react";
import Axios from "axios";
import $ from "jquery";

import EditorHeader from "../components/organisms/headers/EditorHeader";
import PageEditWrapper from "../components/organisms/wrappers/PageEditWrapper";

export default () => {
  const [page, setPage] = useState({ page: { title: "" }, blocks: {} });
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    get_page();
  }, []);

  useEffect(() => {
    window.document.title = "Editor – " + page.page.title;
    check_filled();
  }, [page]);

  let get_page = () => {
    let page_id = window.location.pathname.split("/")[2];
    Axios.post("/page/get_page", { id: page_id }).then(res =>
      setPage(res.data.response)
    );
  };

  let save_page = () => {
    let form_data = {};
    $(".page_edit_wrapper")
      .serializeArray()
      .forEach(el => {
        form_data[el.name] = el.value;
      });
    Axios.post("/page/handle_edit", {
      page: form_data,
      id: page.page.id,
    }).catch(error => alert(error));
  };

  let check_filled = () => {
    let checker = true;
    $(".page_edit_wrapper")
      .serializeArray()
      .forEach(el => {
        el.value == "" ? (checker = false) : "";
      });
    setFilled(checker);
  };

  return (
    <div className="default_page">
      <EditorHeader
        onSaveClick={filled ? save_page : () => {}}
        filled={filled}
      />
      <PageEditWrapper page={page.page} onChange={check_filled} />
    </div>
  );
};
