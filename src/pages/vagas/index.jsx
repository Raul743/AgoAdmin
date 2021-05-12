import React, {useRef,useState} from 'react'
import { Tabs} from 'antd';
import "antd/dist/antd.css";
import { Row, Col } from "reactstrap";
import Input from '../../components/fields/Input'
import { Form } from "@unform/web";


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
  

  Modal,
  UncontrolledTooltip
} from "reactstrap";
const { TabPane } = Tabs;

export default function Profissao() {
  const [openModal, setOpenModal] = useState(false);
  let toggleModal = () => {
    setOpenModal(!openModal);
};
  const formRef = useRef(null);
  return (
    <div className="ml-4 mt-3">
   
   
   <Modal
                className={`modal-dialog-centered modal-xl`}
                md="12"
                isOpen={openModal}
                scrollable={true}
                toggle={() => toggleModal()}
            >
       <h1>tens certeza que queres eliminarr</h1>
            </Modal>
        <Container className="mt-3" fluid>
          

          <Card>
            <CardHeader className="border-0">
              <Row>
                <Col xs="6">
                  <h3 className="mb-0">Listagem de Vagas</h3>
                </Col>
               
              </Row>
            </CardHeader>

            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th>Author</th>
                  <th>Created at</th>
                  <th>Product</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table-user">
                   
                    <b>John Michael</b>
                  </td>
                  <td>
                    <span className="text-muted">10/09/2018</span>
                  </td>
                  <td>
                    <a
                      className="font-weight-bold"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Argon Dashboard PRO
                    </a>
                  </td>
                  <td className="table-actions">
                  
                    <a
                      className="table-action table-action-delete"
                      href="#pablo"
                      id="tooltip601065234"
                      onClick={e =>{ e.preventDefault(); toggleModal()} }
                    >
                      <i className="fas fa-trash" />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip601065234">
                      Delete product
                    </UncontrolledTooltip>
                  </td>
                </tr>
                <tr>
                  <td className="table-user">
                  
                    <b>Alex Smith</b>
                  </td>
                  <td>
                    <span className="text-muted">08/09/2018</span>
                  </td>
                  <td>
                    <a
                      className="font-weight-bold"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Argon Design System
                    </a>
                  </td>
                  <td className="table-actions">
                  
                    <a
                      className="table-action table-action-delete"
                      href="#pablo"
                      id="tooltip397466356"
                      onClick={e => { e.preventDefault(); toggleModal()}}
                    >
                      <i className="fas fa-trash" />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip397466356">
                      Delete product
                    </UncontrolledTooltip>
                  </td>
                </tr>
                <tr>
                  <td className="table-user">
                  
                    <b>Samantha Ivy</b>
                  </td>
                  <td>
                    <span className="text-muted">30/08/2018</span>
                  </td>
                  <td>
                    <a
                      className="font-weight-bold"
                      href="#pablo"
                      onClick={e => { e.preventDefault(); toggleModal()}}
                    >
                      Black Dashboard
                    </a>
                  </td>
                  <td className="table-actions">
               
                    <a
                      className="table-action table-action-delete"
                      href="#pablo"
                      id="tooltip161447542"
                      onClick={e => { e.preventDefault(); toggleModal()}}
                    >
                      <i className="fas fa-trash" />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip161447542">
                      Delete product
                    </UncontrolledTooltip>
                  </td>
                </tr>
                <tr>
                  <td className="table-user">
                  
                    <b>John Michael</b>
                  </td>
                  <td>
                    <span className="text-muted">10/09/2018</span>
                  </td>
                  <td>
                    <a
                      className="font-weight-bold"
                      href="#pablo"
                      onClick={e => { e.preventDefault(); toggleModal()}}
                    >
                      Argon Dashboard PRO
                    </a>
                  </td>
                  <td className="table-actions">
                
                    <a
                      className="table-action table-action-delete"
                      href="#pablo"
                      id="tooltip598568751"
                      onClick={e => { e.preventDefault(); toggleModal()}}
                    >
                      <i className="fas fa-trash" />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip598568751">
                      Delete product
                    </UncontrolledTooltip>
                  </td>
                </tr>
                <tr>
                  <td className="table-user">
                  
                    <b>John Michael</b>
                  </td>
                  <td>
                    <span className="text-muted">10/09/2018</span>
                  </td>
                  <td>
                    <a
                      className="font-weight-bold"
                      href="#pablo"
                      onClick={e => { e.preventDefault(); toggleModal()}}
                    >
                      Argon Dashboard PRO
                    </a>
                  </td>
                  <td className="table-actions">
                 
                    <a
                      className="table-action table-action-delete"
                      href="#pablo"
                      id="tooltip573554853"
                      onClick={e => { e.preventDefault(); toggleModal()}}
                    >
                      <i className="fas fa-trash" />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip573554853">
                      Delete product
                    </UncontrolledTooltip>
                  </td>
                </tr>
              </tbody>
            </Table>
            <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => { e.preventDefault(); toggleModal()}}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => { e.preventDefault(); toggleModal()}}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => { e.preventDefault(); toggleModal()}}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => { e.preventDefault(); toggleModal()}}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => { e.preventDefault(); toggleModal()}}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
          </Card>
         
        </Container>
</div>
  )
}
