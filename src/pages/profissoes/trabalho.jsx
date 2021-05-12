import React,{useRef} from 'react'
import Input from '../../components/fields/Input'
import { Form } from "@unform/web";
import Select from '../../components/fields/Select';
import { Row, Col,Collapse } from "reactstrap";

export default function Trabalho() {
  const formRef = useRef(null);
  return (
    <Form
    ref={formRef}
    onSubmit={(data)=>console.log(data)}
    className="needs-validation mt--21"
    noValidate
  >


<div className="cardWise cardWiseBorder" style={{padding:40}}>
<h3 className="title-header" style={{textAlign:'center', padding:5, marginTop:4}}>Cadastrar Trabalho</h3>
<hr style={{PaddingTop:20}}/>
<Row style={{PaddingTop:70}}>
<Col>
 <Select
    name='n1'
    title='Setor'
    type="text"
   
    required={true}
 />
 </Col>
 <Col>
 <Input 
 name='n1'
 title='Trabalho'
 className="form-control"
 />
 </Col>

</Row>

<div style={{marginTop:27,  display:"flex", justifyContent:"flex-end"}}>
<button
  className="btn btn-primary"
  type="button"
>
  Cadastrar
</button>



</div>
</div>
</Form>
  )
}
