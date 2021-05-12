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
  const formRefArea = useRef(null);
  const formRefSetor = useRef(null);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [area, setArea]= useState([]);
  const[digi, setDigi] = useState(mun.nome)
  const[digiArea, setDigiArea] = useState(mun.areaValue)
  function receber(){
   Api.get('/listar-tudo').then((e)=>{
   
     var aux = e.data.ListagemArea.map((data)=>(
       {
         label:data.nome,
         value:data._id
       }
     ))
     setArea(aux)
   }).catch((e)=>{})
 }



  useEffect(()=>{
   receber()
 }, [])



 let registerArea = async (data, { reset }) => {
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

      formRefArea.current.setErrors(errorMessages);
    }
    return;
  }
  /**
   * End Verifying fields
   */

  setButtonLoading(true);
  reset();
  try {

    
    data.verific = "area"
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


let registerSetor=async (data, { reset }) => {
   try {
     let dataSchema = {
       nome: Yup.string().required("O nome é obrigatorio"),
       areaId: Yup.string().required("a area é obrigatorio")
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
 
       formRefSetor.current.setErrors(errorMessages);
     }
     return;
   }
   /**
    * End Verifying fields
    */
 
   setButtonLoading(true);
   reset();
   try {
 
     
     data.verific = "setor"
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
       {mun.verific=="area"?( <Form
                   ref={formRefArea}
                   onSubmit={(data)=>console.log(data, "feito")}
                   className="needs-validation mt--21"
                   onSubmit={registerArea}
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
      </Form>):( <Form
                   ref={formRefSetor}
                   onSubmit={(data)=>console.log(data, "feito")}
                   className="needs-validation mt--21"
                   onSubmit={registerSetor}
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
                    name='areaId'
                    title='Area'
                    type="select"
                    data={area}
                    required={true}
                    onChange={e => setDigiArea(e)}
                    value={digiArea}
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
      </Form>)}
      
    </div>
  )
}
