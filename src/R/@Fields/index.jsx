import React from "react";
import { FORMTYPE } from "./helper";
import Input from "./contains/input";
import Select from "./contains/select";
// import InputMasks from "./contains/inputMasks";
import DatePicker from "./contains/datepicker";
import Autocomplete from "./contains/autocompleto";
import InputMasks from "./contains/inputMasks";
import NewInputMask from "./contains/inputmask";
import { IssRichText } from "../@Fields/contains/Richtext";

export default function IssField(props) {
    const renderField = props => {
        const { type } = props;
        switch (type.toUpperCase()) {
            case FORMTYPE.INPUT:
                return <Input {...props} />;
            case FORMTYPE.SELECT:
                return <Select {...props} />;
            case FORMTYPE.DATE:
                return <DatePicker {...props} />;
            case FORMTYPE.INPUTMASK:
                return <InputMasks {...props} />;
            case FORMTYPE.NEWINPUTMASK:
                return <NewInputMask {...props} />;
            case FORMTYPE.AUTOCOMPLETE:
                return <Autocomplete {...props} />;
            case FORMTYPE.RICHTEXT:
                return <IssRichText {...props} />;
            default:
                return <Input {...props} />;
        }
    };

    return renderField(props);
}
