import React, { useRef, useEffect, useState } from "react";
import classnames from "classnames";
import {
    FormGroup,
    UncontrolledTooltip,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from "reactstrap";

import { useField } from "@unform/core";

export default function _Input({
    name,
    isrequired,
    noDefaultInputClass,
    classNameForInputGroup,
    ...rest
}) {
    const inputRef = useRef(null);
    const {
        fieldName,
        registerField,
        defaultValue,
        error,
        clearError
    } = useField(name);
    const [status, setStatus] = useState({ bool: "" });
    const defaultInfo = "Teste22" || name;
    const ID = Math.random() + name;

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value"
        });
    }, [fieldName, registerField]);

    return (
        <>
            <label className="form-control-label" htmlFor={ID || name}>
                {rest.title}{" "}
                {isrequired && <small className="text-danger">*</small>}
            </label>
            <FormGroup>
                {rest.info && (
                    <UncontrolledTooltip
                        delay={0}
                        placement="auto"
                        target={inputRef}
                    >
                        <small>{rest.info ? rest.info : defaultInfo}</small>
                    </UncontrolledTooltip>
                )}

                {rest.iconleft && (
                    <UncontrolledTooltip
                        delay={0}
                        placement="auto"
                        target={inputRef}
                    >
                        <small>{rest.info ? rest.info : defaultInfo}</small>
                    </UncontrolledTooltip>
                )}
                <InputGroup
                    className={classnames(
                        "input-group-merge",
                        classNameForInputGroup,
                        {
                            focused: status.bool
                        }
                    )}
                >
                    {rest.iconleft && (
                        <InputGroupAddon
                            id={ID}
                            className="inp"
                            addonType="prepend"
                            onClick={
                                rest.hasOwnProperty("onlefticonclick")
                                    ? rest.onlefticonclick
                                    : () => {}
                            }
                        >
                            <InputGroupText
                                className={
                                    `${!noDefaultInputClass &&
                                        "form-control-sm"}   ${error &&
                                        "form-error"}` + " cod-text"
                                }
                            >
                                <i className={rest.iconleft} />
                                {/* <InputGroupText className="form-control-sm">
                <i className={props.iconleft} />
              </InputGroupText> */}
                            </InputGroupText>
                        </InputGroupAddon>
                    )}

                    <input
                        className={`form-control ${!noDefaultInputClass &&
                            "form-control-sm"}  ${error &&
                            "form-error"} cod-text`}
                        ref={inputRef}
                        defaultValue={defaultValue}
                        {...rest}
                        onFocus={e => {
                            setStatus({ bool: "true" });
                            if (!rest.hasOwnProperty("onFocus")) return;
                            rest.onFocus(e);
                        }}
                        onInput={clearError}
                        onBlur={e => {
                            setStatus({ bool: "" });
                            if (!rest.hasOwnProperty("onBlur")) return;
                            rest.onBlur(e);
                        }}
                    />
                    {rest.right && (
                        <InputGroupAddon
                            addonType="append"
                            onClick={
                                rest.hasOwnProperty("onRightIconClick")
                                    ? rest.onRightClick
                                    : () => {}
                            }
                        >
                            <InputGroupText
                                style={{ cursor: "pointer" }}
                                className={`${!noDefaultInputClass &&
                                    "form-control-sm"}  ${error &&
                                    "form-error"}`}
                                // style={error && { borderColor: "#f95e5e" }}
                            >
                                {rest.right}
                            </InputGroupText>{" "}
                            {rest.doubleoption && (
                                <>
                                    <InputGroupText
                                        style={{ cursor: "pointer" }}
                                        className={`${!noDefaultInputClass &&
                                            "form-control-sm"}   ${error &&
                                            "form-error"}`}
                                        // style={error && { borderColor: "#f95e5e" }}
                                    >
                                        {/* {rest.iconright} */}
                                        <i
                                            className={
                                                rest.doubleoption.first.icon
                                            }
                                        />
                                    </InputGroupText>{" "}
                                    <InputGroupText
                                        style={{ cursor: "pointer" }}
                                        className={`${!noDefaultInputClass &&
                                            "form-control-sm"} ${error &&
                                            "form-error"}`}
                                        // style={error && { borderColor: "#f95e5e" }}
                                    >
                                        {/* {rest.iconright} */}
                                        <i
                                            className={
                                                rest.doubleoption.second.icon
                                            }
                                        />
                                    </InputGroupText>
                                </>
                            )}
                        </InputGroupAddon>
                    )}
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
                                style={{ cursor: "pointer" }}
                                className={`${!noDefaultInputClass &&
                                    "form-control-sm"}   ${error &&
                                    "form-error"}`}
                                // style={error && { borderColor: "#f95e5e" }}
                            >
                                <i className={rest.iconright} />
                            </InputGroupText>{" "}
                            {rest.doubleoption && (
                                <>
                                    <InputGroupText
                                        style={{ cursor: "pointer" }}
                                        className={`${!noDefaultInputClass &&
                                            "form-control-sm"} ${error &&
                                            "form-error"}`}
                                        // style={error && { borderColor: "#f95e5e" }}
                                    >
                                        {/* {rest.iconright} */}
                                        <i
                                            className={
                                                rest.doubleoption.first.icon
                                            }
                                        />
                                    </InputGroupText>{" "}
                                    <InputGroupText
                                        style={{ cursor: "pointer" }}
                                        className={`${!noDefaultInputClass &&
                                            "form-control-sm"} ${error &&
                                            "form-error"}`}
                                        // style={error && { borderColor: "#f95e5e" }}
                                    >
                                        {/* {rest.iconright} */}
                                        <i
                                            className={
                                                rest.doubleoption.second.icon
                                            }
                                        />
                                    </InputGroupText>
                                </>
                            )}
                        </InputGroupAddon>
                    )}
                </InputGroup>
                {error && <small style={{ color: "#9f3a38" }}>{error}</small>}
            </FormGroup>
        </>
    );
}
