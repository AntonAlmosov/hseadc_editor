import React, { useState, useEffect } from "react";
import Axios from "axios";
import pluralize from "pluralize";

import IndexHeader from "../components/organisms/headers/IndexHeader";
import CardsWrapper from "../components/organisms/wrappers/PageWrapper";

export default () => {
  const [pages, setPages] = useState([]);
  const [heading, setHeading] = useState("1 page");

  return (
    <div className="default_page">
      <IndexHeader />
      <h1 className="default_heading index_heading">{heading}</h1>
      <CardsWrapper />
    </div>
  );
};
