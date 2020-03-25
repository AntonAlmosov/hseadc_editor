import React from "react";
import Textarea from "react-textarea-autosize";

export default ({ phrases, customClass }) => {
  return (
    <>
      <Textarea
        name={phrases[0].id}
        id={phrases[0].id}
        className="phrase text"
        data-custom={customClass}
        defaultValue={phrases[0].content}
        placeholder={
          "А теперь напиши здесь что-то важное... Все что захочешь. В одном абзаце 🌈"
        }
      />
    </>
  );
};
