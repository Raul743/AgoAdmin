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

export default function InputMasks({ isrequired, ...rest }) {
    const [status, setStatus] = useState({
        value: rest.hasOwnProperty("val") ? rest.val : "",
        bool: ""
    });
    const defaultInfo = "Teste22";

    return (
        <>
            <label
                className="form-control-label"
                htmlFor={rest.id || rest.name}
            >
                {rest.title}{" "}
                {rest.isrequired === true ? (
                    <small className="text-danger">*</small>
                ) : (
                    ""
                )}
            </label>
            <FormGroup>
                {rest.iconleft && (
                    <UncontrolledTooltip
                        delay={0}
                        placement="auto"
                        target={rest.name}
                    >
                        <small>{rest.info ? rest.info : defaultInfo}</small>
                    </UncontrolledTooltip>
                )}
                <InputGroup
                    className={classnames("input-group-merge", {
                        focused: status.bool
                    })}
                >
                    {rest.iconleft && (
                        <InputGroupAddon
                            id={rest.name}
                            addonType="prepend"
                            onClick={
                                rest.hasOwnProperty("onLeftIconClick")
                                    ? rest.onLeftIconClick
                                    : () => {}
                            }
                        >
                            <InputGroupText className="form-control-sm">
                                <i className={rest.iconleft} />
                            </InputGroupText>
                        </InputGroupAddon>
                    )}
                    <Cleave
                        className="form-control form-control-sm"
                        style={{ textAlign: "right" }}
                        {...rest}
                        onBlur={e => {
                            setStatus({ bool: "" });
                            if (!rest.hasOwnProperty("onBlur")) return;
                            rest.onBlur(e);
                        }}
                        options={rest.options}
                        /*options={{
                            numeral: true,
                            delimiter: ",",
                            numeralThousandsGroupStyle: "thousand"
                        }}*/
                    />
                    {rest.iconasstring && (
                        <InputGroupAddon
                            addonType="append"
                            onClick={
                                rest.hasOwnProperty("onRightIconClick")
                                    ? rest.onRightIconClick
                                    : () => {}
                            }
                        >
                            <InputGroupText
                                style={rest.style}
                                className="form-control-sm iconasstring"
                            >
                                {rest.iconasstring}
                            </InputGroupText>
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
                                style={{ fontSize: "0.7rem" }}
                                className="form-control-sm useText"
                            >
                                <i className={rest.iconright} />
                                {rest.usetext}
                            </InputGroupText>
                        </InputGroupAddon>
                    )}
                </InputGroup>
                {rest.err && <small style={{ color: "red" }}>{rest.err}</small>}
            </FormGroup>
        </>
    );
}
