import React from "react";

import PageCard from "../../molecules/cards/PageCard";

export default ({ pages }) => {
  return (
    <div className=".pages_wrapper">
      <PageCard title="Untitled" page_id={1} published={false} image="" />
    </div>
  );
};
