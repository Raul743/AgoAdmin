import { useField } from "@unform/core";
import React, { useEffect, useRef, useState } from "react";
import { NoSuggestions, Suggestions, Input } from "./styles";

export function Autocomplete({
    suggestions,
    name,
    onEmpty,
    isrequired,
    noDefaultInputClass,
    onNoResultClickedButton,
    classNameForInputGroup,
    ...rest
}) {
    const {
        fieldName,
        registerField,
        defaultValue,
        error,
        clearError
    } = useField(name);
    const inputValueRef = useRef("");
    const [activeSuggestion, setActiveSuggestion] = useState(0);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [value, setValue] = useState("");
    let suggestionsListComponent;

    const onChange = e => {
        const userInput = e.currentTarget.value;
        // Filter our suggestions that don't contain the user's input
        const filteredSuggestions = suggestions.filter(
            suggestion =>
                suggestion?.label
                    .toLowerCase()
                    .indexOf(userInput.toLowerCase()) > -1
        );
        // Update the user input and filtered suggestions, reset the active
        // suggestion and make sure the suggestions are shown

        setActiveSuggestion(0);
        setShowSuggestions(true);
        setUserInput(e.currentTarget.value);
        setFilteredSuggestions(filteredSuggestions);
    };

    const onClick = e => {
        // Update the user input and reset the rest of the state
        setActiveSuggestion(0);
        setShowSuggestions(false);
        setUserInput(e.label);
        setFilteredSuggestions([]);
        setValue(e.value);
    };

    const onKeyDown = e => {
        if (e.keyCode === 13) {
            setActiveSuggestion(0);
            setShowSuggestions(false);
            setUserInput(filteredSuggestions[activeSuggestion]);
        } else if (e.keyCode === 38) {
            if (activeSuggestion === 0) return;
            setActiveSuggestion(activeSuggestion - 1);
        } else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) return;
            setActiveSuggestion(activeSuggestion + 1);
        }
    };

    useEffect(() => {
        inputValueRef.current.value = value;
    }, [value]);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputValueRef.current,
            path: "value"
        });
    }, [fieldName, registerField]);

    if (showSuggestions && userInput) {
        if (filteredSuggestions.length) {
            suggestionsListComponent = (
                <div style={{ position: "relative" }}>
                    <Suggestions>
                        {filteredSuggestions.map((suggestion, index) => {
                            let className;
                            if (index === activeSuggestion) {
                                className = "suggestion-active";
                            }
                            return (
                                <li
                                    className={className}
                                    key={index}
                                    onClick={() => {
                                        onClick(suggestion);
                                    }}
                                >
                                    {suggestion?.html}
                                </li>
                            );
                        })}
                    </Suggestions>
                </div>
            );
        } else {
            suggestionsListComponent = (
                <NoSuggestions>
                    <em>Nenhum resultado encontrado!</em>
                    <br />
                    {onEmpty && (
                        <div
                            className="btn btn-secondary btn-sm"
                            onClick={() => onNoResultClickedButton(userInput)}
                        >
                            Novo
                        </div>
                    )}
                </NoSuggestions>
            );
        }
    }

    return (
        <div>
            <input
                name={name}
                defaultValue={defaultValue}
                type="hidden"
                ref={inputValueRef}
            />
            <Input
                type="text"
                className={`form-control  ${!noDefaultInputClass &&
                    "form-control-sm"}  ${error && "form-error"}`}
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={userInput}
                {...rest}
            />
            <i
                aria-hidden="true"
                class="search icon"
                style={{ position: "absolute", right: "35px", top: "30.8%" }}
            ></i>
            {suggestionsListComponent}
            {error && <small style={{ color: "#9f3a38" }}>{error}</small>}
        </div>
    );
}
