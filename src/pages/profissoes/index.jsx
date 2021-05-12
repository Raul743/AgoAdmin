import React, {useRef, useState} from 'react'
import { Tabs} from 'antd';
import "antd/dist/antd.css";
import { Row, Col,Collapse, Button } from "reactstrap";
import Input from '../../components/fields/Input'
import { Form } from "@unform/web";
import Select from '../../components/fields/Select';
import Sector from './setor'
import Tables from './tables'
import Setor from './setor';
import Trabalho from './trabalho'
import * as Yup from "yup";
import ButtonLoading from "../../components/ButtonLoading";
import { toast } from "react-toastify";
import Api from '../../services/api';
const { TabPane } = Tabs;
export default function Profissao() {
  const formRef = useRef(null);
  const [buttonLoading, setButtonLoading] = useState(false);
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
      data.tb="area"
      console.log("tentando", data)

      const response = await Api.post("/trabalho", { data });
     
      if (response.data.exist) {
        setButtonLoading(false);
        return toast.error("Pais ja existe");
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
    <div className="ml-4 mt-3">
   
    <Tabs defaultActiveKey="1" size="large" style={{ marginBottom: 32 }}>
      <TabPane tab="Cadastro de Profissões" key="1">
      
         <Form
                    ref={formRef}
                    onSubmit={(data)=>console.log(data, "feito")}
                    className="needs-validation mt--21"
                    onSubmit={register}
                    noValidate
                  >
      
         
          <div className="cardWise cardWiseBorder" style={{padding:40}}>
          <h3 className="title-header" style={{textAlign:'center', padding:5, marginTop:4}}>Cadastrar Área</h3>
          <hr style={{PaddingTop:20}}/>
             <Row style={{PaddingTop:70}}>
             <Col xl="6">
                 <Input 
                    name='nome'
                    title='Área'
                    type="text"
                    className="form-control"
                    required={true}
                 />
                 </Col>
                 
             </Row>
           
             <div style={{ marginTop:27, display:"flex", justifyContent:"flex-end"}}>
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

      <Setor />
    
   
      </TabPane>
      
      
      <TabPane tab="Listagem de Profissões" key="2">
    <Tables />
      </TabPane>
      
    </Tabs>
   
  </div>
  )
}
