import React from "react";
import "styles/components.css";

class IssLabel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="d-flex w-100 align-items-center">
                <h4 className="mb-1 font-weight-normal">
                    {this.props.data.titulo}
                </h4>
            </div>
        );
    }
}

export default IssLabel;
