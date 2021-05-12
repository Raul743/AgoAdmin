import React, { useState } from "react";
// react plugin that creates text editor
import ReactQuill from "react-quill";
// reactstrap components
import { Form } from "reactstrap";

export const IssEditor = props => {
  const [reactQuillText, setReactQuillText] = useState("");

  return (
    <>
      <Form>
        <label className="form-control-label">{props.title}</label>
        <div data-quill-placeholder="Quill WYSIWYG" data-toggle="quill" />
        <ReactQuill
          value={reactQuillText}
          onChange={e => console.log(e)}
          theme="snow"
          modules={{
            toolbar: [
              ["bold", "italic"],
              ["link", "blockquote", "code", "image"],
              [
                {
                  list: "ordered"
                },
                {
                  list: "bullet"
                }
              ]
            ]
          }}
        />
      </Form>
    </>
  );
};

export default IssEditor;
