import React from "react";

import PageHeadingTitle from "../../molecules/inputs/PageHeadingTitle";
import DefaultInput from "../../molecules/inputs/DefaultInput";
import LabeledTextarea from "../../molecules/inputs/LabeledTextarea";

export default ({ page, onChange }) => {
  return (
    <form className="page_edit_wrapper" onChange={onChange}>
      <PageHeadingTitle defaultValue={page.title} name="title" />
      <div className="divider"></div>
      <div className="page_edit_info">
        <div className="page_edit_labels">
          <DefaultInput
            placeholder={"Type year"}
            label={"Year"}
            name={"year"}
            defaultValue={page.year}
          />
          <DefaultInput
            placeholder={"Your role in project"}
            label={"Role"}
            name={"role"}
            defaultValue={page.role}
          />
          <DefaultInput
            placeholder={"Student's names"}
            label={"Team"}
            name={"team"}
            defaultValue={page.team}
          />
        </div>
        <LabeledTextarea
          name={"description"}
          label={"Description"}
          defaultValue={page.description ? page.description : ""}
        />
      </div>
    </form>
  );
};
