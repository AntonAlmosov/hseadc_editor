import React from "react";

import TextBlock from "../../molecules/edit_blocks/TextBlock";
import HeadingTextBlock from "../../molecules/edit_blocks/HeadingTextBlock";
import ImageBlock from "../../molecules/edit_blocks/ImageBlock";
import ImageTextBlock from "../../molecules/edit_blocks/ImageHeadingTextBlock";
import HeadingCaptionText from "../../molecules/edit_blocks/HeadingTextImage";
import FeatureBlock from "../../molecules/edit_blocks/FeatureBlock";
import DeleteButton from "../../atoms/buttons/DeleteButton";

export default ({ blocks, handleDelete }) => {
  return (
    <div className="edit_content">
      {blocks.map(block => {
        return (
          <Block
            key={block.block.id}
            block={block}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

const Block = ({ block, handleDelete }) => {
  const [customClass, setCustomClass] = React.useState();
  const isText =
    block.block.block_type == "text" ||
    block.block.block_type == "heading_text" ||
    block.block.block_type == "heading_caption_text";

  React.useEffect(() => {
    let custClass = "";
    if (isText) {
      custClass = block.phrases[0].custom_class
        ? block.phrases[0].custom_class
        : "center";
    }
    if (block.block.block_type == "feature") {
      custClass = block.phrases[0].custom_class
        ? block.phrases[0].custom_class
        : "grey";
    }
    setCustomClass(custClass);
  }, []);

  return (
    <form
      className={
        "edit_block " +
        block.block.block_type +
        "_block " +
        (isText ? customClass : "")
      }
    >
      <div className="block_menu">
        <DeleteButton id={block.block.id} onClick={handleDelete} />
        {isText && <ChangeAllign setCustomClass={setCustomClass} />}
        {block.block.block_type == "feature" && (
          <ChangeColor setCustomClass={setCustomClass} />
        )}
      </div>
      {block.block.block_type == "text" && (
        <TextBlock phrases={block.phrases} customClass={customClass} />
      )}
      {block.block.block_type == "heading_text" && (
        <HeadingTextBlock phrases={block.phrases} customClass={customClass} />
      )}
      {block.block.block_type == "image" && (
        <ImageBlock phrases={block.phrases} />
      )}
      {block.block.block_type == "image_text" && (
        <ImageTextBlock phrases={block.phrases} />
      )}
      {block.block.block_type == "heading_caption_text" && (
        <HeadingCaptionText phrases={block.phrases} customClass={customClass} />
      )}
      {block.block.block_type == "feature" && (
        <FeatureBlock phrases={block.phrases} customClass={customClass} />
      )}
    </form>
  );
};

const ChangeAllign = ({ setCustomClass }) => {
  const [opened, setOpened] = React.useState(false);
  return (
    <>
      {!opened && (
        <div className="icon left-icon" onClick={() => setOpened(true)}></div>
      )}
      {opened && (
        <>
          <div
            className="icon toggleClose"
            onClick={() => setOpened(false)}
          ></div>
          <div
            className="icon left-icon"
            onClick={() => setCustomClass("left")}
          ></div>
          <div
            className="icon center-icon"
            onClick={() => setCustomClass("center")}
          ></div>
          <div
            className="icon right-icon"
            onClick={() => setCustomClass("right")}
          ></div>
        </>
      )}
    </>
  );
};

const ChangeColor = ({ setCustomClass }) => {
  const [opened, setOpened] = React.useState(false);
  return (
    <>
      {!opened && (
        <div className="icon colors" onClick={() => setOpened(true)}></div>
      )}
      {opened && (
        <>
          <div
            className="icon toggleClose"
            onClick={() => setOpened(false)}
          ></div>
          <div
            className="icon white-icon"
            onClick={() => setCustomClass("white")}
          ></div>
          <div
            className="icon green-icon"
            onClick={() => setCustomClass("green")}
          ></div>
          <div
            className="icon grey-icon"
            onClick={() => setCustomClass("grey")}
          ></div>
        </>
      )}
    </>
  );
};
