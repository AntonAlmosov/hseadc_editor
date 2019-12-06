import React, { useState, useEffect } from "react";
import EditHeading from "./EditHeading";
import EditParaghraph from "./EditParaghraph";
import EditSpacer from "./EditSpacer";
import CreateBlockButton from "../buttons/CreateBlockButton";
import Axios from "axios";

export default ({ blocks, id, action }) => {
  let renderBlock = block => {
    if (block.block_type == "heading")
      return (
        <EditHeading
          width={block.width}
          content={block.content}
          key={"block" + block.id}
          action={value => handleEdit(block.id, value)}
        />
      );
    else if (block.block_type == "paragraph")
      return (
        <EditParaghraph
          width={block.width}
          content={block.content}
          key={"block" + block.id}
          action={value => handleEdit(block.id, value)}
        />
      );
    else if (block.block_type == "spacer")
      return (
        <EditSpacer
          width={block.width}
          content={block.content}
          key={"block" + block.id}
        />
      );
  };

  let handleEdit = (id, value) => {
    Axios.post("/block/handle_edit", {
      attr: "content",
      value: value,
      id: id,
    });
  };

  return (
    <div className="phrase">
      {blocks.map(block => {
        return renderBlock(block);
      })}
      <CreateBlockButton id={id} action={action} />
    </div>
  );
};
