import React, {useState, useEffect} from 'react'
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
  Modal,
  UncontrolledTooltip
} from "reactstrap";
import Editar from './Editar'
import Api from '../../services/api'
import { toast } from "react-toastify";
export default function Tables() {
  const [data, setData]= useState([])
  const [editMun, setEditMun]=useState({})
  function receber(){
    Api.get('/listar-tudo').then((dados)=>{
     console.log("teste",dados.data.ListagemPais)
      setData(dados.data.ListagemProvincia)
    }).catch((e)=>{

    })
  }
  useEffect(()=>{

    
   receber()
  },[setData])

  const [openModal, setOpenModal] = useState(false);
  let toggleModal = () => {
    setOpenModal(!openModal);
};

let apagar = async (id)=>{

  var data={};
  data.verific = "provincia"
  data.id=id
    const response = await Api.post("/listar-del", { data });
    if (response.data.sucesso) {
     
     
     toast.success("Dados deletado com sucesso");
     return  receber()
   } else {
     
     return toast.error("Falha ao deletar dados");
   }
}

  return (
    <div>
       <Modal
                className={`modal-dialog-centered modal-xl`}
                md="12"
                isOpen={openModal}
                scrollable={true}
                toggle={() => toggleModal()}
            >
      <Editar mun={editMun}/>
            </Modal>
        <Container className="mt-3" fluid>
          

          <Card>
            <CardHeader className="border-0">
              <Row>
                <Col xs="6">
                  <h3 className="mb-0">Listagem de Provincia</h3>
                </Col>
               
              </Row>
            </CardHeader>

            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th>Provincia</th>
                  <th>Created at</th>
                  <th>Pais</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {data.map((dados)=>(
                   <tr>
                   <td className="table-user">
                    
                     <b> {dados.nome}</b>
                   </td>
                   <td>
                     <span className="text-muted">{dados.createdAt}</span>
                   </td>
                   <td>
                     <a
                       className="font-weight-bold"
                       href="#pablo"
                       onClick={e =>{ e.preventDefault(); setEditMun({id:dados._id,nome:dados.nome, paisValue:[{label:dados.paisId.nome, value:dados.paisId._id}]} ); toggleModal();}}
                     >
                       {dados.paisId.nome}
                     </a>
                   </td>
                   <td className="table-actions">
                   
                     <a
                       className="table-action table-action-delete"
                       href="#pablo"
                       id="tooltip601065234"
                       onClick={e =>{ e.preventDefault();apagar(dados._id)}}
                     >
                       <i className="fas fa-trash" />
                     </a>
                     <UncontrolledTooltip delay={0} target="tooltip601065234">
                       Deletar
                     </UncontrolledTooltip>
                   </td>
                 </tr>
                ))}
               
               
              </tbody>
            </Table>
           
          </Card>
         
        </Container>

    </div>
  )
}
