import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
// reactstrap components
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  UncontrolledTooltip
} from "reactstrap";

export const IssDatapicker = props => {
  let data = { ...props };
  delete data.type;
  let defaultInfo =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

  return (
    <>
      <label
        className="form-control-label"
        htmlFor="example-datetime-local-input"
      >
      {data.title}{props.isrequired === true ? <small className="text-danger">*</small> : ''}
      </label>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend" id={props.name}>
            <InputGroupText className="form-control-sm">
              <i className="ni ni-calendar-grid-58" />
            </InputGroupText>
          </InputGroupAddon>
          {props.name && (
            <UncontrolledTooltip delay={0} placement="auto" target={props.name}>
              <small>{props.info ? props.info : defaultInfo}</small>
            </UncontrolledTooltip>
          )}
          <ReactDatetime
            inputProps={{ ...data, className: "form-control form-control-sm" }}
            timeFormat={false}
          />
        </InputGroup>
        {data.err && <small style={{ color: "red" }}>{data.err}</small>}
      </FormGroup>
    </>
  );
};

export default IssDatapicker;
