import React from "react";
import Textarea from "react-textarea-autosize";

export default ({ phrases }) => {
  return (
    <>
      <Textarea
        name={phrases[0].id}
        className="phrase text"
        defaultValue={phrases[0].content}
        placeholder="And write something important here... Everything you want. In one abstact 🌈"
      />
      <Textarea
        name={phrases[1].id}
        className="phrase text"
        defaultValue={phrases[1].content}
        placeholder={
          "And write something important here... Everything you want. In one abstact 🌈"
        }
      />
    </>
  );
};
