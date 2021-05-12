import React, {useRef, useState, useEffect} from 'react'
import { Form } from "@unform/web";
import Select from '../../components/fields/Select';
import { Row, Col } from "reactstrap";
import Input from '../../components/fields/Input'
import Api from '../../services/api';
import * as Yup from "yup";
import { toast } from "react-toastify";
import ButtonLoading from "../../components/ButtonLoading";
export default function Municipio() {
const [pais, setPais]= useState([]);

const formRef = useRef(null);
const [buttonLoading, setButtonLoading] = useState(false);
useEffect(()=>{
  function receber(){
    Api.get('/localizacao').then((e)=>{
    
      var aux = e.data.pais.map((data)=>(
        {
          label:data.nome,
          value:data._id
        }
      ))
      setPais(aux)
    }).catch((e)=>{})
  }
  receber()
}, [])


let register = async (data, { reset }) => {
  try {
    let dataSchema = {
      nome: Yup.string().required("O nome é obrigatorio"),
      paisId: Yup.string().required("O pais é obrigatorio")
      
    };

    const schema = Yup.object().shape(dataSchema);

    await schema.validate(data, {
      abortEarly: false,
    });
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      const errorMessages = {};

      err.inner.forEach((error) => {
        errorMessages[error.path] = error.message;
      });

      formRef.current.setErrors(errorMessages);
    }
    return;
  }
  /**
   * End Verifying fields
   */

  setButtonLoading(true);
  reset();
  try {
    data.local="provincia"
   
    const response = await Api.post("/localizacao", { data });
   
    if (response.data.exist) {
      setButtonLoading(false);
      return toast.error("provincia ja existe");
    }
    console.log(response.data);
    if (response.data.sucesso) {
      setButtonLoading(false);
      return toast.success("Cadastro feito com sucesso");
    } else {
      setButtonLoading(false);
      return toast.error("Falha ao cadastrar");
    }
  } catch (err) {
    setButtonLoading(false);
    console.log(err);
  }
};


  return (
    <div>
       <Form
                   ref={formRef}
                   onSubmit={(data)=>console.log(data, "feito")}
                   className="needs-validation mt--21"
                   onSubmit={register}
                   noValidate
                  >
      
         
          <div className="cardWise cardWiseBorder" style={{padding:40}}>
          <h3 className="title-header" style={{textAlign:'center', padding:5, marginTop:4}}>Cadastrar Provincia</h3>
          <hr style={{PaddingTop:20}}/>
             <Row style={{PaddingTop:70}}>
             <Col>
                 <Input 
                    name='nome'
                    title='Nome'
                    type="text"
                    className="form-control"
                    required={true}
                 />
                 
                 </Col>
                <Col>
                <Select 
                    name='paisId'
                    title='Pais'
                    type="select"
                    data={pais}
                    required={true}
                 />
                </Col>
             </Row>
             
             <div style={{marginTop:27, display:"flex", justifyContent:"flex-end"}}>
             <ButtonLoading
                      text="Cadastrar"
                      type="submit"
                      overText="Criando a conta"
                      isLoading={buttonLoading}
                      className="btn btn-primary my-4"
                    />
            
              
             </div>
          </div>
      </Form>
    </div>
  )
}
