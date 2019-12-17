import React, { useState, useEffect } from "react";
import Axios from "axios";
import pluralize from "pluralize";

import IndexHeader from "../components/organisms/headers/IndexHeader";
import CardsWrapper from "../components/organisms/wrappers/PageWrapper";

export default () => {
  const [pages, setPages] = useState([]);
  const [heading, setHeading] = useState("Loading");
  const [search, setSearch] = useState({ active: false, result: [] });

  useEffect(() => {
    get_pages();
  }, []);

  useEffect(() => {
    handle_heading_change();
  }, [pages]);

  useEffect(() => {
    handle_heading_change();
  }, [search]);

  let handle_heading_change = () => {
    if (search.active)
      setHeading(
        search.result.length +
          " " +
          pluralize("page", search.result.length) +
          " found"
      );
    else setHeading(pages.length + " " + pluralize("page", pages.length));
  };

  let get_pages = () => {
    Axios.get("/page/get_pages").then(res => setPages(res.data));
  };

  let handle_create_page = () => {
    Axios.post("/page/handle_create", {
      page: { title: "Untitled", published: false },
    }).then(res =>
      window.location.replace("page/" + res.data.page_id + "/edit")
    );
  };

  let handle_search = query => {
    if (query.length) {
      let reg = RegExp("^" + query, "i");
      let searchResult = pages.filter(page => reg.test(page.title));
      setSearch({ active: true, result: searchResult });
    } else setSearch({ active: false, result: [] });
  };

  return (
    <div className="default_page">
      <IndexHeader
        onCreateClick={handle_create_page}
        onSearch={handle_search}
      />
      <h1 className="default_heading index_heading">{heading}</h1>
      <CardsWrapper pages={search.active ? search.result : pages} />
    </div>
  );
};
