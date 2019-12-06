import React from "react";
import Textarea from "../SmartTextarea";

export default ({ content, width, action }) => {
  return (
    <div className={"block " + width}>
      <Textarea
        onBlur={e => action(e.target.value)}
        hintText="Some text"
        defaultValue={content}
        style={{
          fontFamily: "Helvetica Neue",
          fontSize: "50px",
          fontHeight: "60px",
          width: "100%",
        }}
      />
    </div>
  );
};
