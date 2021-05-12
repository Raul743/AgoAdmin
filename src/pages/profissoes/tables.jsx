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
  const [setor, setSetor]= useState([])
  const [editMun, setEditMun]=useState({})
  let apagar = async (dados)=>{

    var data={};
    data.verific = dados.verific
    data.id=dados.id
      const response = await Api.post("/listar-del", { data });
      if (response.data.sucesso) {
       
        receber()
       toast.success("Dados deletado com sucesso");
       
     } else {
       
       return toast.error("Falha ao deletar dados");
     }
  }
  function receber(){
    Api.get('/listar-tudo').then((dados)=>{
     console.log("teste",dados.data.ListagemPais)
      setData(dados.data.ListagemArea)
      setSetor(dados.data.ListagemSetor)

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
  return (
    <div>
       <Modal
                className={`modal-dialog-centered modal-xl`}
                md="12"
                isOpen={openModal}
                scrollable={true}
                toggle={() => toggleModal()}
            >
      <Editar mun={editMun} />
            </Modal>
        <Container className="mt-3" fluid>
          

          <Card>
            <CardHeader className="border-0">
              <Row>
                <Col xs="6">
                  <h3 className="mb-0">Listagem Area</h3>
                </Col>
               
              </Row>
            </CardHeader>

            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th>Area</th>
                  <th>Created at</th>
                 
                  <th />
                </tr>
              </thead>
              <tbody>
                {data.map((dados)=>(
                   <tr>
                   <td className="table-user">
                   <a
                       className="font-weight-bold"
                       href="#pablo"
                       onClick={e =>{ e.preventDefault(); setEditMun({id:dados._id,nome:dados.nome,  verific:"area"} );toggleModal()}}
                     >
                     <b> {dados.nome}</b>
                     </a>
                   </td>
                   <td>
                     <span className="text-muted">{dados.createdAt}</span>
                   </td>
                   
                   <td className="table-actions">
                   
                     <a
                       className="table-action table-action-delete"
                       href="#pablo"
                       id="tooltip601065234"
                       onClick={e =>{ e.preventDefault(); apagar({id:dados._id, verific:"area"})}}
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

        <Container className="mt-3" fluid>
          

          <Card>
            <CardHeader className="border-0">
              <Row>
                <Col xs="6">
                  <h3 className="mb-0">Listagem Setor</h3>
                </Col>
               
              </Row>
            </CardHeader>

            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th>Setor</th>
                  <th>Created at</th>
                  <th>Area</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {setor.map((dados)=>(
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
                       onClick={e =>{ e.preventDefault(); setEditMun({id:dados._id,nome:dados.nome, areaValue:[{label:dados.areaId.nome, value:dados.areaId._id}], verif:"setor"} );toggleModal()}}
                     >
                       {dados?.areaId?.nome}
                     </a>
                   </td>
                   <td className="table-actions">
                   
                     <a
                       className="table-action table-action-delete"
                       href="#pablo"
                       id="tooltip601065234"
                       onClick={e =>{ e.preventDefault(); apagar({id:dados._id, verific:"setor"})}}
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
