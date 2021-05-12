import React, { useRef, useEffect, useState } from "react";
import ReactSelect, {
    OptionTypeBase,
    components,
    Props as SelectProps
} from "react-select";

import {
    FormGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    UncontrolledTooltip
} from "reactstrap";

import { useField } from "@unform/core";
import "./select.css";
import classnames from "classnames";
import { isEmpty } from "../../../general/genericsFun";
// import { isEmpty } from "../../general/genericsFun";

const Select = ({ name, selectIcon, ...rest }) => {
    const selectRef = useRef(null);

    const [idTulltip, a_] = useState(
        "info" +
            new Date().getDay() +
            "" +
            new Date().getSeconds() +
            new Date().getHours()
    );

    const debounceRef = useRef(null);
    const [inFoucos, setInFoucos] = useState(false);
    const {
        fieldName,
        defaultValue,
        registerField,
        error,
        clearError
    } = useField(name);
    let { noBorder, newElement, data, enableImg, isrequired } = rest;
    var value;
    if (!isEmpty(data) && data.length === 1) value = { value: data };

    const imgOrIcon = item => {
        // debugger
        if (item.hasOwnProperty("text")) return;
        return !isEmpty(item.icon) ? (
            <div style={{ paddingTop: "10px" }}>
                {" "}
                <i className={item.icon + " avatar-select"}></i> {item.label}{" "}
            </div>
        ) : !isEmpty(item.img) ? (
            <div>
                {" "}
                <img
                    className="avatar-select mr-2"
                    src={require(`assets/img/theme/team-${Math.floor(
                        Math.random() * 4
                    ) + 1}.jpg`)}
                    alt={item.value}
                />{" "}
                {item.label}{" "}
            </div>
        ) : (
            item.label
        );
    };

    const fillData = values => {
        if (enableImg === true) {
            values = values.map(d => {
                d.label = imgOrIcon(d);
                return d;
            });
        }

        return values;
    };

    useEffect(() => {
        if (rest.isMulti) {
            setInFoucos(true);
        }
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        registerField({
            name: fieldName,
            ref: selectRef.current,
            path: "state.value",
            getValue: ref => {
                if (rest.isMulti) {
                    if (!ref.state?.value) return [];
                    //if(isEmpty(typeof ref.state.value === 'string'))return data.length === 1 ? data[0].value: data
                    if (typeof ref.state.value.map !== "function") {
                        if (!ref.state.value) return "";
                        return ref.state.value.value;
                    }
                    return ref.state?.value?.map(option => option?.value);
                } else {
                    if (!ref.state.value) return "";
                    return ref.state.value.value;
                }
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fieldName, registerField, rest.isMulti]);

    const CustomOption = e => {
        const { innerProps, isDisabled } = e;
        // console.log("index", e);
        return !isDisabled ? (
            <div {...innerProps}>{e.data.component}</div>
        ) : null;
    };

    const DropdownIndicatorComponent = props => {
        return (
            <components.DropdownIndicator {...props}>
                {selectIcon}
            </components.DropdownIndicator>
        );
    };

    const DropdownIndicatorComponentOther = props => {
        return (
            <components.DropdownIndicator {...props}>
                {(() => {
                    if (inFoucos) {
                        return (
                            <span
                                className="teste-384"
                                onClick={e => {
                                    rest.onSelectAll && rest.onSelectAll(e);
                                }}
                            >
                                <i
                                    id={idTulltip}
                                    onClick={e => {
                                        rest.onSelectAll && rest.onSelectAll(e);
                                    }}
                                    className="fas fa-check-double t kfgjug"
                                >
                                    <div>Selecionar Todos</div>
                                </i>
                            </span>
                        );
                    } else
                        return (
                            <>{selectIcon || <i class="fas fa-search"></i>}</>
                        );
                })()}
            </components.DropdownIndicator>
        );
    };

    return (
        <>
            <label className="form-control-label">
                {rest.title}{" "}
                {isrequired && <small className="text-danger">*</small>}
            </label>
            <FormGroup>
                {rest.iconleft && (
                    <UncontrolledTooltip
                        delay={0}
                        placement="auto"
                        target={selectRef}
                    >
                        <small>{rest.info ? rest.info : "defaultInfo"}</small>
                    </UncontrolledTooltip>
                )}
                <InputGroup
                    className={
                        classnames(`input-group-merge flexed ${noBorder}`, {
                            focused: "true"
                        }) +
                        "  div-out-rs " +
                        (newElement !== undefined ? " t " : "")
                    }
                >
                    <ReactSelect
                        defaultValue={defaultValue}
                        ref={selectRef}
                        classNamePrefix={`${error &&
                            "unFormError "} react-select`}
                        {...rest}
                        onChange={
                            rest?.debounce
                                ? e => {
                                      const { time = 1000 } = rest;
                                      clearTimeout(debounceRef.current);
                                      debounceRef.current = setTimeout(() => {
                                          rest.onChange(e);
                                      }, time);
                                  }
                                : rest.onChange
                        }
                        components={
                            rest.other
                                ? {
                                      Option: CustomOption,
                                      DropdownIndicator: DropdownIndicatorComponentOther
                                  }
                                : inFoucos
                                ? {
                                      DropdownIndicator: DropdownIndicatorComponentOther
                                  }
                                : {
                                      DropdownIndicator:
                                          DropdownIndicatorComponent || null
                                  }
                        }
                        // {...value}

                        isClearable={true}
                        options={fillData(data)}
                        onInputChange={e => {
                            clearError(e);
                            if (rest.onInputChange) {
                                rest.onInputChange(e);
                            }
                        }}
                    />

                    {newElement !== undefined ? (
                        <InputGroupAddon
                            title={newElement.title}
                            addonType="append"
                            onClick={e => newElement.func(e)}
                        >
                            <InputGroupText
                                className="form-control-sm _4Select"
                                style={error && { borderColor: "#9f3a38" }}
                            >
                                <i className="fas fa-plus mr-1" />{" "}
                                {newElement.legend}
                            </InputGroupText>
                        </InputGroupAddon>
                    ) : (
                        ""
                    )}
                </InputGroup>
                {error && <small style={{ color: "#9f3a38" }}>{error}</small>}
            </FormGroup>
        </>
    );
};

export default Select;
