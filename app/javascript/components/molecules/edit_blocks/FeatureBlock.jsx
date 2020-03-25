import React, { useState } from "react";
import Textarea from "react-textarea-autosize";

export default ({ phrases, customClass }) => {
  return (
    <div className={"feature_block_edit " + customClass}>
      <Textarea
        name={phrases[0].id}
        id={phrases[0].id}
        className={"phrase feature"}
        data-custom={customClass}
        placeholder={"Просто добавь идей 💡"}
        defaultValue={phrases[0].content}
      />
    </div>
  );
};
