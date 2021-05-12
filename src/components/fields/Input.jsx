/**
 * Modeles
 */
import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useField } from "@unform/core";
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

export const IssInput = ({ name, ...rest }) => {
  const inputRef = useRef(null);
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
      {rest.title && (
        <label className="form-control-label" htmlFor={rest.id || rest.name}>
          {rest.title}{" "}
          {rest.isRequired === true ? (
            <small className="text-danger">*</small>
          ) : (
            ""
          )}
        </label>
      )}

      {rest.tooltip && (
        <i
          className="far fa-question-circle fa-sm ml-2"
          data-toggle="tooltip"
          data-placement={rest.tooltipPlacement}
          title={rest.tooltip}
        ></i>
      )}

      <FormGroup>
        <InputGroup>
          {rest.iconLeft && (
            <InputGroupAddon addonType="prepend">
              <InputGroupText className="form-control">
                <i className={rest.iconLeft} />
              </InputGroupText>
            </InputGroupAddon>
          )}
          <input
            ref={inputRef}
            defaultValue={defaultValue}
            {...rest}
            className="form-control"
          />
          {rest.iconRight && (
            <InputGroupAddon addonType="append">
              <InputGroupText className="form-control-sm">
                <i className={rest.iconRight} />
              </InputGroupText>
            </InputGroupAddon>
          )}
        </InputGroup>
        {error && <small style={{ color: "red" }}>{error}</small>}
      </FormGroup>
    </>
  );
};

/**
 * Default props
 */
IssInput.defaultProps = {
  tooltipPlacement: "top",
};

/**
 * Prop types
 */
IssInput.propTypes = {
  title: PropTypes.string,
  tooltip: PropTypes.string,
  tooltipPlacement: PropTypes.string,
};

export default IssInput;
