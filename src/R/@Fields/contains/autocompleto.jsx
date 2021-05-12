import _ from "lodash";
// import faker from 'faker'
import React, { Component } from "react";
import { Search, Icon, Label } from "semantic-ui-react";
import DefaultImg from "assets/img/uploadPlaceHolder.jpg";
import Empresa from "assets/img/empresa.png";
import "assets/css/semantic-ui-css/semantic.css";
// import "assets/css/semantic.css";
import "./autocomplete.css";
import { isEmpty } from "../../../general/genericsFun";
import IssField from "components/@Fields";
const Itype = {
    enterprise: "empresa",
    COLETIVA: "COLETIVA",
    SINGULAR: "SINGULAR"
};

const initialState = { isLoading: false, results: [], value: "", Inew: "" };

export default class Autocomplete extends Component {
    state = initialState;
    source = [];
    intervalCall = React.createRef();

    componentDidMount() {
        setTimeout(() => {
            if (!isEmpty(this.props.defaultValue)) {
                let valor = this.props.defaultValue?.title || "";
                this.setState({ value: valor + " " });
                this.handleSearchChange("", {
                    value: this.props.defaultValue?.title
                });
            }
        }, 500);
    }

    componentDidUpdate(prevProps, prevState) {
        clearTimeout(this.intervalCall.current);
        this.source = this?.props?.source?.map(k => {
            if (k.hasOwnProperty("image")) {
                if (isEmpty(k.image)) {
                    if (!isEmpty(k.defaulttypeimage)) {
                        if (
                            k.defaulttypeimage.toLowerCase() ===
                            Itype.enterprise
                        )
                            k.image = Empresa;
                        else k.image = DefaultImg;
                    } else k.image = DefaultImg;
                }
            } else {
                if (!isEmpty(k.defaulttypeimage)) {
                    if (k.defaulttypeimage.toLowerCase() === Itype.enterprise)
                        k.image = Empresa;
                    else k.image = DefaultImg;
                }
            }
            return k;
        });
    }

    handleResultSelect = (e, { result }) => {
        if (result.add === "true") {
            if (!isEmpty(result.title.props)) {
                result.title = result.title.props.children[4].props?.children;
                
            }
        }

        this.setState({ value: result.title });
        this.props.onChange(result);
    };

    handleSearchChange = (e, { value }) => {
        if (value === "")
            if (this.props.inputChage) this.props.inputChage(value);
            else if (this.props.inputChange) this.props.inputChange(value);

        this.setState({ isLoading: true, value });
        setTimeout(() => {
            if (this.state.value.length < 1) return this.setState(initialState);

            const re = new RegExp(_.escapeRegExp(this.state.value), "i");
            const isMatch = result => re.test(result.title);
            let Iresult = _.filter(this.source, isMatch);
            if (isEmpty(Iresult))
                Iresult = [
                    {
                        add: "true",
                        title: (
                            <Label key={Math.random().toString()} as="a" tag>
                                {" "}
                                <Icon
                                    key={Math.random().toString()}
                                    name="add"
                                />{" "}
                                Novo{" "}
                                <Label.Detail key={Math.random().toString()}>
                                    {value}
                                </Label.Detail>{" "}
                            </Label>
                        ),
                        value: "k.idPessoa"
                    }
                ];

            this.setState({
                isLoading: false,
                results: Iresult
            });
        }, 300);
    };

    getDefaultVal = source => {
        if (!isEmpty(source)) {
            this.props.onChange(source[0]);
            return source[0].title;
        }
        return source;
    };
    render() {
        const { isLoading, value, results } = this.state;
        const {
            source: ISource,
            title,
            apply,
            name,
            useadd,
            addconfig,
            ...rest
        } = this.props;
        return (
            <div
                key={Math.random().toString()}
                className={`ui right labeled input ${
                    useadd === true ? " addUser" : ""
                }`}
                style={{ width: " 100%" }}
            >
                <div
                    key={Math.random().toString()}
                    className="field"
                    style={{ width: " 100%" }}
                >
                    <label
                        className="form-control-label"
                        key={Math.random().toString()}
                    >
                        {title}
                    </label>
                    {this.props.isLoading === true ||
                    this.props.isDisabled === true ? (
                        <>
                            <IssField
                                name={name}
                                type="select"
                                data={[]}
                                isLoading={this.props.isLoading}
                                isDisabled={true}
                            />
                        </>
                    ) : (
                        <div className="isLoadin-Data">
                            <Search
                                ref={this.newInput}
                                key={Math.random().toString()}
                                fluid
                                className="ui-maxWidth default appearToLeft"
                                loading={isLoading}
                                onResultSelect={this.handleResultSelect}
                                onSearchChange={_.debounce(
                                    this.handleSearchChange,
                                    500,
                                    {
                                        leading: true
                                    }
                                )}
                                results={results}
                                value={value}
                                {...rest}
                                // disabled={
                                //     apply !== "false" && ISource?.length === 1
                                //         ? true
                                //         : false
                                // }
                            />
                        </div>
                    )}
                </div>
                {useadd && (
                    <div
                        key={Math.random()}
                        style={{ display: "flex", flexDirection: "column" }}
                    >
                        <label
                            key={Math.random()}
                            className="form-control-label"
                            style={{ flex: 1 }}
                        >
                            {""}
                        </label>
                        <div
                            key={Math.random()}
                            style={{ flex: 1 }}
                            class="text iconAutom"
                            role="alert"
                            aria-live="polite"
                            aria-atomic="true"
                            onClick={() => addconfig.onClick()}
                        >
                            {addconfig && addconfig.render}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
