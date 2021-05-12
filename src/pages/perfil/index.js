import { Form } from "@unform/web";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Row, Col } from "reactstrap";
import ButtonLoading from "../../components/ButtonLoading";
import Icon from "@ant-design/icons";
import { toast } from "react-toastify";
/**
 * Components
 */
import { useAuth } from "../../auth";
import { ReactComponent as services } from "../assets/startup.svg";
import { ReactComponent as compasse } from "../assets/compass.svg";
import { ReactComponent as settings } from "../assets/settings.svg";
import { ReactComponent as menu } from "../assets/menu.svg";
import { Tree, Switch } from "antd";

import Footer from "../../components/footer";
import "./style.css";
import graphQl from "../../services/graphQl";
import CheckBox from "../../components/fields/Checkbox";
import Input from "../../components/fields/Input";
import TextArea from "../../components/fields/TextArea";
function Perfil() {
  useEffect(() => {
    setShowLine({
      showLeafIcon: false,
    });
    PerfilData();
    setUser(getUser());
  }, []);
  const [showLine, setShowLine] = useState(true);
  const [showIcon, setShowIcon] = useState(true);
  const [loading, setLoading] = useState(false);
  const [treeData, setTreeData] = useState([]);
  const [Compare, setCompare] = useState([]);
  const [getData, setGetData] = useState([]);
  const [User, setUser] = useState(0);
  const [icon, setIcon] = useState([
    <Icon component={compasse} size={30} />,
    <Icon component={services} size={30} />,
    <Icon component={settings} size={30} />,
  ]);
  const { getUser } = useAuth();
  const formRef = useRef();
  async function handleSubmit(Data) {
    var data = [];
    var subData = [];
    Compare.forEach((item) => {
      getData.map((subItem) => {
        if (item.key == subItem.dept) {
          subData.push({
            methodId: subItem.id,
          });
        }
      });
      data.push({
        menuId: item.key,
        profileMenuMethods: subData,
      });
      subData = [];
    });
    var obj = {
      name: Data.name,
      profileMenu: data,
      perfilClient: {
        clientId: User?.persons[0]?.clients[0]?.id,
      },
    };
    PutData(obj);
  }
  const PutData = async (data) => {
    try {
      var response = await graphQl
        .add({
          table: "PerfilMembers",
          properties: "id",
          values: data,
          useBrackets: false,
        })
        .run();
      if (response.success) {
        toast.success("Cadastrado com sucesso");
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const PerfilData = () => {
    return graphQl
      .get({
        table: "listMenu",
        properties: `
            id
            name
            description
            menuMethod {
              id
              methods {
                id
                name
              }
            }
          `,
      })
      .run()
      .then(({ listMenu }) => {
        const response = listMenu?.map((item, index) => ({
          title: item?.name,
          key: item?.id,
          checkable: false,
          icon: icon[index],
          children: item?.menuMethod?.map((subItem) => ({
            title: subItem?.methods[0]?.name,
            key: subItem?.methods[0]?.id + " " + item?.id,
            dept: item?.id,
            id: subItem?.methods[0]?.id,
            icon: icon[index],
          })),
        }));
        console.log("Data ==> ", response);
        const compareData = listMenu?.map((item, index) => ({
          title: item?.name,
          key: item?.id,
        }));
        setTreeData(response);
        setCompare(compareData);
      })
      .catch((error) => console.log(error));
  };

  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };
  const onCheck = (checkedKeys, info) => {
    console.log("Info", info.checkedNodes);
    setGetData(info.checkedNodes);
  };
  return (
    <>
      <div className="header bg-primary pb-6">
        <div className="container-fluid">
          <div className="header-body">
            <div className="row align-items-center py-4">
              <div className="col-lg-6 col-7">
                <h6 className="h2 text-white d-inline-block mb-0">Membros</h6>
                <nav
                  aria-label="breadcrumb"
                  className="d-none d-md-inline-block ml-md-4"
                >
                  <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                    <li className="breadcrumb-item">
                      <Link to="/membros">
                        <i className="fas fa-home"></i>
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/membros">Perfil</Link>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt--6">
        <div className="row">
          <div className="col">
            <div className="card-wrapper">
              <div className="card">
                <div className="card-header">
                  <h3 className="mb-0">Perfil</h3>
                </div>
                <div className="card-body">
                  <Form
                    ref={formRef}
                    className="needs-validation"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-6">
                        <div className="row">
                          <div className="col-lg-12">
                            <Input
                              type="text"
                              id="sigla"
                              name="name"
                              title="Adicionar Perfil"
                              className="form-control"
                            />
                            <Tree
                              showLine={showLine}
                              showIcon={showIcon}
                              onSelect={onSelect}
                              onCheck={onCheck}
                              treeData={treeData}
                              defaultExpandedKeys={["0-0-9"]}
                              defaultExpandedKeys={["0-0"]}
                              defaultExpandedKeys={["0-3", "0-0"]}
                              checkable
                            />
                            <TextArea name="description" />
                          </div>
                        </div>
                        <div className="col-12 row justify-content-end">
                          <button
                            className="btn btn-outline-light"
                            type="button"
                          >
                            Cancelar
                          </button>
                          <ButtonLoading
                            className="btn btn-primary"
                            type="submit"
                            text="Adicionar"
                            iconWidth={12}
                            iconHeight={12}
                            isLoading={loading}
                            overText="Adicionando"
                          />
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Perfil;
