import React from "react";
import { Col, Row } from "reactstrap";
import { isEmpty } from "../../../general/genericsFun";

const Itype = {
    enterprise: "empresa",
    COLETIVA: "COLETIVA",
    SINGULAR: "SINGULAR"
};
const IinlineCategories = inline => {
    return isEmpty(inline) ? (
        <></>
    ) : (
        inline.map((line, i) => {
            return (
                <Col xl="6" className="except" key={i}>
                    {`${line?.key}:  ${line?.value}`}{" "}
                    <i className={line?.icon} style={{ marginLeft: "5px" }}></i>
                </Col>
            );
        })
    );
};
const Icategories = categories => {
    if (!isEmpty(categories)) {
        return categories.map((category, i) => {
            if (!isEmpty(category?.inline)) {
                return (
                    <Col xl="12 pl-0" key={i}>
                        <Row>{IinlineCategories(category?.inline)}</Row>
                    </Col>
                );
            } else
                return (
                    <Col xl="12 pl-0" key={i}>
                        {`${category?.key}:  ${category?.value}`}{" "}
                        <i
                            className={category?.icon}
                            style={{ marginLeft: "5px" }}
                        ></i>
                    </Col>
                );
        });
    }
};

export function preComponents(source) {
    const { type, categories } = source;

    if (!isEmpty(categories) && typeof categories === "object") {
        switch (type) {
            case Itype.COLETIVA:
                return (
                    <div>
                        {" "}
                        <Row>{Icategories(categories)}</Row>
                    </div>
                );
            case Itype.SINGULAR:
                return (
                    <div>
                        {" "}
                        <Row>{Icategories(categories)}</Row>
                    </div>
                );
            default:
                return "source";
        }
    }
}

export function descriptionGenerator(item, type) {
    let categories = [];
    if (!isEmpty(item?.documentoIdentificacao)) {
        let _num = item?.documentoIdentificacao?.[0]?.numeroDoc;
        categories.push({
            value: _num,
            key: "Ident",
            icon: "fas fa-address-card icon-color-org"
        });
    }

    if (!isEmpty(item?.capitalSocial)) {
        categories.push({
            value: item?.capitalSocial,
            key: "Capital Social",
            icon: "fas fa-address-card"
        });
    }
    if (!isEmpty(item?.nif)) {
        categories.push({
            value: item?.nif,
            key: "NIF",
            icon: "fas fa-address-card icon-color-org"
        });
    }
    if (!isEmpty(item.cae)) {
        let _num = item?.cae?.designacao;
        categories.push({
            value: _num,
            key: "CAE",
            icon: "fas fa-address-card icon-color-org"
        });
    }

    if (!isEmpty(item?.contactoPessoa)) {
        let telefone = item?.contactoPessoa?.[0]?.contacto?.telefone;
        let email = item?.contactoPessoa?.[0]?.contacto?.email;
        categories.push({
            inline: [
                {
                    value: telefone,
                    key: "Telefone",
                    icon: "fas fa-phone icon-color-gn"
                },
                {
                    value: email,
                    key: "E-mail",
                    icon: "fas fa-envelope icon-color-org"
                }
            ]
        });
    }

    return preComponents({
        type,
        categories
    });
}
