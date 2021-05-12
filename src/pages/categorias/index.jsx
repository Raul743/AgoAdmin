import React, {useRef,useState, useEffect} from 'react'
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
import Api from '../../services/api'

export default function Profissao() {
const [data, setData]= useState([])
  useEffect(()=>{

    function receber(){
      Api.get('/listar-tudo').then((dados)=>{
       console.log("teste",dados.data.Listagem)
        setData(dados.data.Listagem)
      }).catch((e)=>{
  
      })
    }
   receber()
  },[setData])

  return (
    <div className="ml-4 mt-3">
   
    

            <Container className="mt-3" fluid>
          

          <Card>
            <CardHeader className="border-0">
              <Row>
                <Col xs="6">
                  <h3 className="mb-0">Listagem de Papeis da aplicação</h3>
                </Col>
                
              </Row>
            </CardHeader>

            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th>Papel</th>
                  <th>Created at</th>
                  
               
                </tr>
              </thead>
              <tbody>
                {data.map((dados)=>(
                  <tr>
                  <td className="table-user">
                   
                    <b>{dados.nome}</b>
                  </td>
                  <td>
                    <span className="text-muted">{dados.createdAt}</span>
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
