import React, { useRef, useState, useEffect } from "react";
import classnames from "classnames";
import { useField } from "@unform/core";
import "react-datepicker/dist/react-datepicker.css";
import {
    InputGroupText,
    InputGroupAddon,
    InputGroup,
    UncontrolledTooltip,
    FormGroup
} from "reactstrap";

const DatePicker = ({ name, required, ...rest }) => {
    const datepickerRef = useRef(null);
    const {
        fieldName,
        registerField,
        defaultValue,
        error,
        clearError
    } = useField(name);
    const [date, setDate] = useState(defaultValue || null);
    const defaultInfo = "" || name;
    const ID = Math.random() + name;

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: datepickerRef.current,
            path: "value"
        });
    }, [fieldName, registerField]);

    return (
        <>
            <label className="form-control-label" htmlFor={ID || name}>
                {rest.title}{" "}
                {required && <small className="text-danger">*</small>}
            </label>
            <FormGroup>
                {rest.iconleft && (
                    <UncontrolledTooltip
                        delay={0}
                        placement="auto"
                        target={datepickerRef}
                    >
                        <small>{rest.info ? rest.info : defaultInfo}</small>
                    </UncontrolledTooltip>
                )}
                <InputGroup className={classnames("input-group-merge")}>
                    {rest.iconleft && (
                        <InputGroupAddon
                            id={ID}
                            addonType="prepend"
                            onClick={
                                rest.hasOwnProperty("onlefticonclick")
                                    ? rest.onlefticonclick
                                    : () => {}
                            }
                        >
                            <InputGroupText
                                className={`form-control-sm ${error &&
                                    "form-error"}`}
                            >
                                <i className={rest.iconleft} />
                            </InputGroupText>
                        </InputGroupAddon>
                    )}
                    {/* <ReactDatePicker
            className={error && "unFormErrorDate"}
            ref={datepickerRef}
            selected={date}
            onChange={setDate}
            {...rest}
            onFocus={e => setStatus({ bool: "true" })}
            onBlur={e => setStatus({ bool: "" })}
          /> */}
                    <input
                        ref={datepickerRef}
                        type="date"
                        className="form-control"
                        {...rest}
                        style={{ height: "30px" }}
                        onInput={clearError}
                    />
                    {rest.iconright && (
                        <InputGroupAddon
                            addonType="append"
                            onClick={
                                rest.hasOwnProperty("onRightIconClick")
                                    ? rest.onRightIconClick
                                    : () => {}
                            }
                        >
                            <InputGroupText
                                className={`form-control-sm ${error &&
                                    "form-error"}`}
                                // style={ error && {borderColor: "#f95e5e"}}
                            >
                                <i className={rest.iconright} />
                            </InputGroupText>
                        </InputGroupAddon>
                    )}
                </InputGroup>
                {error && <small style={{ color: "#9f3a38" }}>{error}</small>}
            </FormGroup>
        </>
    );
};
export default DatePicker;
