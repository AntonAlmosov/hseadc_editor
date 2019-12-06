import React, { useState, useEffect } from "react";
import ShowHeader from "../components/headers/ShowHeader";
import axios from "axios";

export default () => {
  const [id, setId] = useState(window.location.pathname.split("/")[2]);
  const [page, setPage] = useState({ tittle: "", phrases: [] });

  useEffect(() => {
    getPage();
    setPage(page);
  }, []);

  let getPage = () => {
    axios
      .post("/page/get_page", { id: id })
      .then(res => setPage(res.data.response));
  };

  return (
    <div className="pageWrapper">
      <ShowHeader tittle={page.tittle} id={id} />
    </div>
  );
};
