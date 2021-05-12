import React from "react";

/**
 *
 * @param {array} props
 * @options {disabled, defaultChecked, Your Both}
 */
export const IssCheckbox = props => {
  return (
    <>
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" {...props} />
        <label className="custom-control-label" htmlFor={props.id}>
          {props.title}
        </label>
        {props.err && <small style={{ color: "red" }}>{props.err}</small>}
      </div>
    </>
  );
};

export default IssCheckbox;
