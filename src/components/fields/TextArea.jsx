/**
 * Modules
 */
import React, { useEffect, useRef } from "react";
import { Label, FormGroup } from "reactstrap";
import { useField } from "@unform/core";

export default function TextArea({ name, ...props }) {
  const textRef = useRef(null);
  const { registerField, fieldName, defaultValue, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  const { title } = props;
  return (
    <FormGroup>
      <Label for="exampleText" className="form-control-label">
        {title === undefined ? "" : title}
      </Label>
      <textarea
        ref={textRef}
        {...props}
        defaultValue={defaultValue}
        className="form-control"
      ></textarea>
    </FormGroup>
  );
}
