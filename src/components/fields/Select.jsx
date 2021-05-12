import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";

import SelectInput from "react-select";

import { FormGroup } from "reactstrap";

export default function Select({ name, ...props }) {
  const { fieldName, registerField, error } = useField(name);

  const selectRef = useRef();

  useEffect(() => {
    let path = "state.value.value";
    if (props.isArray || props.isObj) {
      path = "state.value";
    }

    registerField({
      name: fieldName,
      ref: selectRef.current,
      path,
    });
  }, [fieldName, registerField]);

  return (
    <FormGroup>
      {props.title && (
        <label className="form-control-label" htmlFor={props.id || props.name}>
          {props.title}{" "}
          {props.isRequired === true ? (
            <small className="text-danger">*</small>
          ) : (
            ""
          )}
        </label>
      )}
      <SelectInput
        {...props}
        ref={selectRef}
        name={props.name}
        id={props.id}
        isDisabled={props.loading}
        isLoading={props.loading}
        options={props.data}
      />
      {error && <small style={{ color: "red" }}>{error}</small>}
    </FormGroup>
  );
}
