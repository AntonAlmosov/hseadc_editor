import React from "react";

import TextTextBlock from "../../molecules/edit_blocks/TextTextBlock";
import HeadingTextBlock from "../../molecules/edit_blocks/HeadingTextBlock";
import ImageBlock from "../../molecules/edit_blocks/ImageBlock";
import ImageHeadingTextBlock from "../../molecules/edit_blocks/ImageHeadingTextBlock";
import HeadingTextImage from "../../molecules/edit_blocks/HeadingTextImage";
import ImageImageBlock from "../../molecules/edit_blocks/ImageImageBlock";
import DeleteButton from "../../atoms/buttons/DeleteButton";

export default ({ blocks, handleDelete }) => {
  return (
    <div className="edit_content">
      {blocks.map(block => {
        return (
          <form
            className={"edit_block " + block.block.block_type + "_block"}
            key={block.block.id}
          >
            <DeleteButton id={block.block.id} onClick={handleDelete} />
            {block.block.block_type == "text_text" && (
              <TextTextBlock phrases={block.phrases} />
            )}
            {block.block.block_type == "heading_text" && (
              <HeadingTextBlock phrases={block.phrases} />
            )}
            {block.block.block_type == "image" && (
              <ImageBlock phrases={block.phrases} />
            )}
            {block.block.block_type == "image_heading_text" && (
              <ImageHeadingTextBlock phrases={block.phrases} />
            )}
            {block.block.block_type == "heading_text_image" && (
              <HeadingTextImage phrases={block.phrases} />
            )}
            {block.block.block_type == "image_image" && (
              <ImageImageBlock phrases={block.phrases} />
            )}
          </form>
        );
      })}
    </div>
  );
};
