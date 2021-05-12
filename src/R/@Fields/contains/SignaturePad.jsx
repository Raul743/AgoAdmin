import React, { useRef } from "react";

// reactstrap components
import { FormGroup, Label, Col, Button } from "reactstrap";
import { toast } from "react-toastify";
import SignaturePad from "react-signature-pad-wrapper";

export const IssSignaturePad = props => {
    var Signature = useRef({});
    var data = "";
    const clearSignature = () => Signature.current.clear();
    const saveSignature = () => {
        if (Signature.current.isEmpty()) {
            return toast.error("Introduza a assinatura");
        }

        data = Signature.current.toDataURL();
        // const toData = Signature.current.toData();

        props.getData({
            data: data.replace(/^data:.+;base64,/, ""),
            nome: Math.random()
                .toString(36)
                .substring(2, 15),
            extensao: "png"
        });
    };
    return (
        <>
            <FormGroup>
                <Label className="form-control-label" for="exampleText">
                    {props.signatureName}
                </Label>
                <div
                    style={{
                        border: "1px solid #cccc",
                        borderRadius: "4px"
                    }}
                >
                    <Col xl="12">
                        <Button
                            style={{
                                color: "white" /*backgroundColor:'grey'*/
                            }}
                            className="ml-auto btn-primary isButton mt-2 mb-2"
                            color="danger"
                            size="sm"
                            data-dismiss="modal"
                            type="button"
                            onClick={clearSignature}
                        >
                            Limpar
                        </Button>

                        <Button
                            style={{
                                color: "white" /*backgroundColor:'grey'*/
                            }}
                            className="ml-auto btn-primary isButton mt-2 mb-2"
                            color="success"
                            size="sm"
                            data-dismiss="modal"
                            type="button"
                            onClick={saveSignature}
                        >
                            Gravar assinatura
                        </Button>
                    </Col>
                    <Col xl="12 p-0">
                        <div style={{ borderTop: "1px solid #cccc" }}>
                            <SignaturePad
                                name={props.name}
                                height={89}
                                options={{
                                    /*minWidth: 5, maxWidth: 10,*/ penColor:
                                        "rgb(66, 133, 244)"
                                }}
                                clearButton="true"
                                ref={Signature}
                            />
                        </div>
                    </Col>
                </div>
            </FormGroup>
        </>
    );
};

export default IssSignaturePad;
