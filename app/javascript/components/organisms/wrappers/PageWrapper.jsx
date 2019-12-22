import React from "react";

import PageCard from "../../molecules/cards/PageCard";

export default ({ pages }) => {
  return (
    <div className="pages_wrapper">
      {pages.map(page => {
        return (
          <PageCard
            title={page.title}
            page_id={page.id}
            published={page.published}
            image={page.cover}
            key={"page_" + page.title + "_id_" + page.id}
          />
        );
      })}
    </div>
  );
};
