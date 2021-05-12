import React from "react";
import { ValidatorComponent } from "react-form-validator-core";
import { IssInput } from "./Input";
import { IssSelect } from "./Select";
import { IssDatapicker } from "./Datapicker";
import { IssEditor } from "./Editor";
import { IssDropzone } from "./Dropzone";
import { IssRadio } from "./Radio";
import { IssCheckbox } from "./Checkbox";
import { IssRichText } from "./Richtext";
import TextArea from "./TextArea";
import Autocomplete from "../@Fields/contains/autocompleto";
import InputMask from "./inputMask";

class Field extends ValidatorComponent {
    render() {
        const {
            errorMessages,
            validators,
            requiredError,
            validatorListener,
            ...rest
        } = this.props;

        switch (this.props.type) {
            case "text":
            case "email":
            case "url":
            case "number":
            case "inputmask":
                return <InputMask {...rest} />;
            case "tel":
                return <IssInput {...rest} err={this.errorText()} />;
            case "select":
                return <IssSelect {...rest} err={this.errorText()} />;
            case "date":
                return <IssDatapicker {...rest} err={this.errorText()} />;
            case "radio":
                return <IssRadio {...rest} err={this.errorText()} />;
            case "checkbox":
                return <IssCheckbox {...rest} err={this.errorText()} />;
            case "editor":
                return <IssEditor {...rest} err={this.errorText()} />;
            case "textarea":
                return <TextArea {...rest} err={this.errorText()} />;
            case "richtext":
                return <IssRichText {...rest} err={this.errorText()} />
            case "dropzone-single":
            case "dropzone-multiple":
                return <IssDropzone {...rest} err={this.errorText()} />;
            case "autocomplete":
                return <Autocomplete {...rest} />;
            default:
                return (
                    <h3 className="text-danger">
                        Campo inválido, não existe Field do Tipo: "
                        {this.props.type}"...
                    </h3>
                );
        }
    }

    errorText() {
        const { isValid } = this.state;

        if (isValid) {
            return null;
        }

        return <small style={{ color: "red" }}>{this.getErrorMessage()}</small>;
    }
}

export default Field;
