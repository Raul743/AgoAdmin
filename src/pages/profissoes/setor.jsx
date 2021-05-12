import React,{useRef, useState, useEffect} from 'react'
import Input from '../../components/fields/Input'
import { Form } from "@unform/web";
import Select from '../../components/fields/Select';
import { Row, Col,Collapse } from "reactstrap";
import * as Yup from "yup";
import ButtonLoading from "../../components/ButtonLoading";
import { toast } from "react-toastify";
import Api from '../../services/api';
export default function Setor() {
  const formRef = useRef(null);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [area, setArea]=useState([])
  let register = async (data, { reset }) => {
    try {
      let dataSchema = {
        nome: Yup.string().required("O nome é obrigatorio"),
        areaId: Yup.string().required("O campo area é obrigatorio")
        
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
      data.tb="setor"
      

      const response = await Api.post("/trabalho", { data });
     
      if (response.data.exist) {
        setButtonLoading(false);
        return toast.error("setor ja existe");
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

  useEffect(()=>{
    Api.get('/trabalho').then((data)=>{
      var aux=  data.data.area.map((e)=>(
          {
            label:e.nome,
            value:e._id
          }
        ))
        setArea(aux)
    }).catch((e)=>{})
  },[])
  return (
    <Form
    ref={formRef}
    onSubmit={(data)=>console.log(data, "feito")}
    className="needs-validation mt--21"
    onSubmit={register}
    noValidate
  >


<div className="cardWise cardWiseBorder" style={{padding:40}}>
<h3 className="title-header" style={{textAlign:'center', padding:5, marginTop:2}}>Cadastrar Setor</h3>
<hr style={{PaddingTop:20}}/>
<Row style={{PaddingTop:70}}>

 <Col>
 <Input 
 name='nome'
 title='Setor'
 className="form-control"
 />
 </Col>
 <Col>
 <Select 
    name='areaId'
    title='Área'
    type="text"
   data={area}
    required={true}
 />
 </Col>
</Row>

<div style={{marginTop:27,  display:"flex", justifyContent:"flex-end"}}>
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
  )
}
