import React from "react";
// reactstrap components
import { FormGroup } from "reactstrap";
import ReactQuill from "react-quill";

export const IssRichText = props => {
    return (
        <>
            <FormGroup>
                <div
                    data-quill-placeholder="Quill WYSIWYG"
                    data-toggle="quill"
                />
                <ReactQuill
                    // onChange={e => {
                    //     this.setState({
                    //         targetDescricao: e.target
                    //     });
                    //     console.log(e);
                    // }}
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
            </FormGroup>
        </>
    );
};

export default IssRichText;
