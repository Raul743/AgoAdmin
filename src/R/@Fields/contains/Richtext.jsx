import React from "react";
// reactstrap components
import { FormGroup } from "reactstrap";
import ReactQuill from "react-quill";

export const IssRichText = props => {
    return (
        <>
            <FormGroup>
                <div
                    style={{
                        border: "1px #cccc",
                        borderRadius: "4px"
                    }}
                >
                    <ReactQuill
                        {...props}
                        style={props.style}
                        name={props.name}
                        id={props.id || props.name}
                        theme="snow"
                        modules={{
                            toolbar: [
                                ["bold", "italic"],
                                ["link", "blockquote", "code", "image"],
                                [
                                    {
                                        list: "ordered"
                                    },
                                    {
                                        list: "bullet"
                                    }
                                ]
                            ]
                        }}
                    />
                    {props.err && (
                        <small style={{ color: "red" }}>{props.err}</small>
                    )}
                </div>
            </FormGroup>
        </>
    );
};

export default IssRichText;
