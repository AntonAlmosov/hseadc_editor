import React, { useState, useEffect } from "react";
import EditHeader from "../components/headers/EditHeader";
import axios from "axios";
import LongButton from "../components/buttons/LongButton";
import EditPhrase from "../components/pageElements/EditPhrase";

export default () => {
  const [id, setId] = useState(window.location.pathname.split("/")[2]);
  const [page, setPage] = useState({ tittle: "", phrases: [] });

  useEffect(() => {
    getPage();
  }, []);

  let getPage = () => {
    axios
      .post("/page/get_page", { id: id })
      .then(res => setPage(res.data.response))
      .then(setPage(page));
  };

  let createPhrase = () => {
    axios.post("/phrase/handle_create", { page_id: id }).then(() => {
      getPage();
      setPage(page);
    });
  };

  let createBlock = (p_id, type, width) => {
    axios.post("/block/handle_create", {
      phrase_id: p_id,
      type: type,
      width: width,
    });
    getPage();
  };

  return (
    <div className="pageWrapper">
      <EditHeader tittle={page.tittle} id={id} />
      <div className="contentWrapper">
        {page.phrases.map(phrase => (
          <EditPhrase
            id={phrase.id}
            blocks={phrase.blocks}
            key={"phrase" + phrase.id}
            action={createBlock}
          />
        ))}
        <LongButton text="Создать блок" action={createPhrase} />
      </div>
    </div>
  );
};
