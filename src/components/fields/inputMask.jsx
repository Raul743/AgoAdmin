import React, { useState } from "react";
import Cleave from "cleave.js/react";
import classnames from "classnames";
import {
    FormGroup,
    UncontrolledTooltip,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from "reactstrap";

export default function InputMask(props) {
    const [status, setStatus] = useState({
        value: props.hasOwnProperty("val") ? props.val : "",
        bool: ""
    });

    let defaultInfo =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    return (
        <>
            <label
                className="form-control-label"
                htmlFor={props.id || props.name}
            >
                {props.title}{" "}
                {props.isrequired === true ? (
                    <small className="text-danger">*</small>
                ) : (
                    ""
                )}
            </label>
            <FormGroup style={props.groupstyle}>
                {props.iconleft && (
                    <UncontrolledTooltip
                        delay={0}
                        placement="auto"
                        target={props.name}
                    >
                        <small>{props.info ? props.info : defaultInfo}</small>
                    </UncontrolledTooltip>
                )}
                <InputGroup
                    className={classnames("input-group-merge", {
                        focused: status.bool
                    })}
                >
                    {props.iconleft && (
                        <InputGroupAddon
                            id={props.name}
                            addonType="prepend"
                            onClick={
                                props.hasOwnProperty("onLeftIconClick")
                                    ? props.onLeftIconClick
                                    : () => {}
                            }
                        >
                            <InputGroupText className="form-control-sm">
                                <i className={props.iconleft} />
                            </InputGroupText>
                        </InputGroupAddon>
                    )}
                    <Cleave
                        className="form-control form-control-sm"
                        style={{ textAlign: "right" }}
                        {...props}
                    />
                    {props.iconright && (
                        <InputGroupAddon
                            addonType="append"
                            onClick={
                                props.hasOwnProperty("onRightIconClick")
                                    ? props.onRightIconClick
                                    : () => {}
                            }
                        >
                            <InputGroupText
                                style={{ fontSize: "0.7rem" }}
                                className="form-control-sm useText"
                            >
                                <i className={props.iconright} />
                                {props.usetext}
                            </InputGroupText>
                        </InputGroupAddon>
                    )}
                </InputGroup>
                {props.err && (
                    <small style={{ color: "red" }}>{props.err}</small>
                )}
            </FormGroup>
        </>
    );
}
