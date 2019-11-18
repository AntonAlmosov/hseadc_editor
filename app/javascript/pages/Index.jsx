import React, { useState, useEffect } from "react";
import IndexHeader from "../components/headers/IndexHeader";
import PageCard from "../components/cards/PageCard";
import Axios from "axios";

export default () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    getPages();
    setPages(pages);
  }, []);

  let getPages = () => {
    fetch("/page/get_pages")
      .then(res => res.json())
      .then(data => {
        setPages(data.response);
      });
  };

  let createPage = () => {
    Axios.get("/page/handle_create").then(() => {
      getPages();
      setPages(pages);
    });
  };

  return (
    <div className="pageWrapper">
      <IndexHeader action={createPage} />
      <div className="indexContent">
        {pages.map(page => (
          <PageCard
            tittle={page.tittle}
            page_id={page.id}
            key={"pageCard_" + page.id}
          />
        ))}
      </div>
    </div>
  );
};
