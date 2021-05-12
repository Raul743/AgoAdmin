import React, {useRef, useState, useEffect} from 'react'
import { Form } from "@unform/web";
import Select from '../../components/fields/Select';
import { Row, Col } from "reactstrap";
import Input from '../../components/fields/Input'
import Api from '../../services/api';
import * as Yup from "yup";
import { toast } from "react-toastify";
import ButtonLoading from "../../components/ButtonLoading";
export default function Municipio({mun}) {
  const formRef = useRef(null);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [pais, setPais]= useState([]);
  const[digi, setDigi] = useState(mun.nome)
  const[digiPais, setDigiPais] = useState(mun.paisValue)
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



  useEffect(()=>{
   receber()
 }, [])



 let register = async (data, { reset }) => {
  try {
    let dataSchema = {
      nome: Yup.string().required("O nome é obrigatorio")
      
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

    
    data.verific = "provincia"
    data.id=mun.id
    const response = await Api.post("/listar-tudo", { data });
   
    console.log(response.data);
    if (response.data.sucesso) {
      setButtonLoading(false);
      
      toast.success("Editado com sucesso");
      return  receber()
    } else {
      setButtonLoading(false);
      return toast.error("Falha ao editar");
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
                    value={digi}
                    onChange={e => setDigi(e.target.value)}
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
                    onChange={e => setDigiPais(e)}
                    value={digiPais}
                 />
                </Col>
             </Row>
             
             <div style={{marginTop:27, display:"flex", justifyContent:"flex-end"}}>
             <ButtonLoading
                      text="Editar"
                      type="submit"
                      overText="Editando..."
                      isLoading={buttonLoading}
                      className="btn btn-primary my-4"
                    />
             
            
              
             </div>
          </div>
      </Form>
    </div>
  )
}
