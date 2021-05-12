import React, {useState, useEffect} from 'react'
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardFooter,

  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  Col,
  Modal,
  UncontrolledTooltip
} from "reactstrap";
//import Editar from './Editar'
import Api from '../../services/api'
export default function Tables() {
  const [data, setData]= useState([])
  const [setor, setSetor]= useState([])
  

  useEffect(()=>{

    function receber(){
      Api.get('/listar-tudo').then((dados)=>{
       console.log("teste",dados.data.ListagemPais)
        setData(dados.data.ListagemEmpresa)
        setSetor(dados.data.ListagemCandidato)

      }).catch((e)=>{
  
      })
    }
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
    {/**  <Editar /> */}
            </Modal>
        <Container className="mt-3" fluid>
          

          <Card>
            <CardHeader className="border-0">
              <Row>
                <Col xs="6">
                  <h3 className="mb-0">Listagem de Utilizador(Empresa)</h3>
                </Col>
                <Col className="text-right" xs="6">
                  <Button
                    className="btn-neutral btn-round btn-icon"
                    color="default"
                    href="#pablo"
                    id="tooltip969372949"
                    onClick={e => {e.preventDefault(); }}
                    size="sm"
                  >
                    <span className="btn-inner--icon mr-1">
                      <i className="fas fa-user-edit" />
                    </span>
                  
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip969372949">
                 Editar
                  </UncontrolledTooltip>
                </Col>
              </Row>
            </CardHeader>

            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th>Empresa</th>
                  <th>Created at</th>
                 
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
                   
                   <td className="table-actions">
                   
                     <a
                       className="table-action table-action-delete"
                       href="#pablo"
                       id="tooltip601065234"
                       onClick={e =>{ e.preventDefault(); toggleModal()}}
                     >
                       <i className="fas fa-trash" />
                     </a>
                     <UncontrolledTooltip delay={0} target="tooltip601065234">
                       Delete product
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
                  <h3 className="mb-0">Listagem de Utilizador  Candidato</h3>
                </Col>
                <Col className="text-right" xs="6">
                  <Button
                    className="btn-neutral btn-round btn-icon"
                    color="default"
                    href="#pablo"
                    id="tooltip969372949"
                    onClick={e => {e.preventDefault(); }}
                    size="sm"
                  >
                    <span className="btn-inner--icon mr-1">
                      <i className="fas fa-user-edit" />
                    </span>
                  
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip969372949">
                 Editar
                  </UncontrolledTooltip>
                </Col>
              </Row>
            </CardHeader>

            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th>Candidato </th>
                  <th>Created at</th>
              
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
                  
                   <td className="table-actions">
                   
                     <a
                       className="table-action table-action-delete"
                       href="#pablo"
                       id="tooltip601065234"
                       onClick={e =>{ e.preventDefault(); toggleModal()}}
                     >
                       <i className="fas fa-trash" />
                     </a>
                     <UncontrolledTooltip delay={0} target="tooltip601065234">
                       Delete product
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
