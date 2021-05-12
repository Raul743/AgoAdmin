import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

/**
 *
 * @param {array} props
 * @options {disabled, defaultChecked, Your Both}
 */
export const IssRadio = ({ name, ...props }) => {
  // Refs
  const inputRef = useRef(null);

  // Const
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <>
      <div className="custom-control custom-radio">
        <input
          ref={inputRef}
          name={name}
          className="custom-control-input"
          defaultValue={defaultValue}
          type="radio"
          {...props}
        />
        <label className="custom-control-label" htmlFor={props.id}>
          {props.title}
        </label>
        {error && <small style={{ color: "red" }}>{error}</small>}
      </div>
    </>
  );
};

export default IssRadio;
