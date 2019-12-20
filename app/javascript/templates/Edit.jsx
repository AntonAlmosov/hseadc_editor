import React, { useState, useEffect } from "react";
import Axios from "axios";
import $ from "jquery";

import EditorHeader from "../components/organisms/headers/EditorHeader";
import PageEditWrapper from "../components/organisms/wrappers/PageEditWrapper";
import CreationOverlay from "../components/organisms/overlays/CreationOverlay";
import ModalWrapper from "../components/organisms/overlays/ModalWrapper";
import EditContent from "../components/organisms/content/EditContent";
import { element } from "prop-types";

export default () => {
  const [page, setPage] = useState({ page: { title: "" }, blocks: [] });
  const [filled, setFilled] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [currentModal, setCurrentModal] = useState("");

  useEffect(() => {
    get_page();
  }, []);

  useEffect(() => {
    window.document.title = "Editor – " + page.page.title;
    check_filled();
  }, [page]);

  let get_page = scroll => {
    let page_id = window.location.pathname.split("/")[2];
    Axios.post("/page/get_page", { id: page_id })
      .then(res => setPage(res.data.response))
      .then(() => {
        if (scroll) scrollToBottom();
      });
  };

  let save_page = () => {
    //Saving Page info
    let form_data = {};
    $(".page_edit_wrapper")
      .serializeArray()
      .forEach(el => {
        form_data[el.name] = el.value;
      });
    Axios.post("/page/handle_edit", {
      page: form_data,
      id: page.page.id,
    });
    // Going through phrases and saving'em one by one
    $(".phrase")
      .serializeArray()
      .forEach(el =>
        Axios.post("/phrase/handle_edit", {
          phrase: { content: el.value },
          id: [el.name],
        })
      );
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

  let handle_create_block = type => {
    Axios.post("/block/handle_create", {
      block: { block_type: type },
      page_id: page.page.id,
    }).then(() => {
      get_page(true);
      handle_modal();
    });
  };

  let handle_modal = type => {
    if (modalOpened) {
      setModalOpened(!modalOpened);
      setCurrentModal("");
    } else {
      setModalOpened(!modalOpened);
      setCurrentModal(type);
    }
  };

  let scrollToBottom = () => {
    let scrollingElement = document.scrollingElement || document.body;
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
  };

  return (
    <>
      <ModalWrapper
        modalOpened={modalOpened}
        currentModal={currentModal}
        handleModal={handle_modal}
        handleCreateBlock={handle_create_block}
      />
      <div className="default_page">
        <EditorHeader
          onSaveClick={filled ? save_page : () => {}}
          filled={filled}
        />
        <PageEditWrapper page={page.page} onChange={check_filled} />
        <CreationOverlay
          onClick={() => {
            handle_modal("create_block_modal");
          }}
        />
        <EditContent blocks={page.blocks} />
        <div
          style={{ float: "left", clear: "both" }}
          className="scrollToBottom"
        ></div>
      </div>
    </>
  );
};
