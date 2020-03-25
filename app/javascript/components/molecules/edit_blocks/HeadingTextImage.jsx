import React, { useState } from "react";
import Textarea from "react-textarea-autosize";

export default ({ phrases, customClass }) => {
  return (
    <>
      <Textarea
        name={phrases[0].id}
        id={phrases[0].id}
        className={"phrase heading "}
        data-custom={customClass}
        defaultValue={phrases[0].content}
        placeholder="Заголовок"
      />
      <Textarea
        name={phrases[1].id}
        id={phrases[1].id}
        className={"phrase caption "}
        data-custom={customClass}
        defaultValue={phrases[1].content}
        placeholder={"Добавь подзаголовок"}
      />
      <Textarea
        name={phrases[2].id}
        id={phrases[2].id}
        className={"phrase text "}
        data-custom={customClass}
        defaultValue={phrases[2].content}
        placeholder={
          "А теперь напиши здесь что-то важное... Все что захочешь. В одном абзаце 🌈"
        }
      />
    </>
  );
};
