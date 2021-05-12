import React from "react";
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";
import Footer from "../../components/footer/";
import { Row, Col, CardTitle, CardBody, Card, CardHeader } from "reactstrap";
import IssApexCharts from "./apex";

import {
  chartOptions,
  parseOptions,
  chartExample2,
  chartExample3,
  chartExample4,
  chartExample5,
  chartExample6,
  chartExample7,
} from "./chart";
export default function Main() {
  document.getElementsByTagName("body")[0].className =
    "g-sidenav-show g-sidenav-pinned";

  const BarOptions = {
    labels: ["Empresa", "Quantidade"],
    chart: {
      width: "100%",
      height: 250,
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    // xaxis: {
    //   categories: [
    //     "Korea",
    //   ]
    // },
    legend: {
      position: "right",
      verticalAlign: "top",
      containerMargin: {
        left: 35,
        right: 60,
      },
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const LineOptions = {
    chart: {
      height: 250,
      type: "line",
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Stock Analysis (2021 - 2021)",
      align: "left",
      offsetX: 250,
    },
    xaxis: {
      categories: [2021],
    },
    yaxis: [
      {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
          color: "#3f51b5",
        },
        labels: {
          style: {
            color: "#3f51b5",
          },
        },
        title: {
          text: "Income (thousand crores)",
        },
      },
      {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
          color: "#FFA600",
        },
        labels: {
          show: false,
          style: {
            color: "#FFA600",
          },
        },
      },
      {
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#03a9f4",
        },
        labels: {
          style: {
            color: "#03a9f4",
          },
        },
        title: {
          text: "Revenue (thousand crores)",
        },
      },
    ],
    tooltip: {
      followCursor: true,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y + " thousand crores";
          }
          return y;
        },
      },
    },
  };

  const pie = {
    labels: ["Empresa", "Quantidade"],
    size: undefined,
    customScale: 1,
    offsetX: 0,
    offsetY: 0,
    expandOnClick: false,
    dataLabels: {
      offset: 0,
      minAngleToShowLabel: 10,
    },
  };
  return (
    <>
      <div class="container-fluid mt-4">
        <div className="header-body">
          <Row>
            <Col md="6" xl="3">
              <Card className="card-stats bg-gradient-danger">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Utilizador administrador
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">350,897</span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                        <i className="ni ni-active-40" />
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-sm">
                    <span className="text-success mr-2">
                      <i className="fa fa-arrow-up" /> 3.48%
                    </span>{" "}
                    <span className="text-nowrap">Desde o último mês</span>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" xl="3">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Novos Utilizadores
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">2,356</span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                        <i className="ni ni-chart-pie-35" />
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-sm">
                    <span className="text-success mr-2">
                      <i className="fa fa-arrow-up" /> 3.48%
                    </span>{" "}
                    <span className="text-nowrap">Desde o último mês</span>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" xl="3">
              <Card className="card-stats ">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Utilizadores Candidatos
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">924</span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                        <i className="ni ni-money-coins" />
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-sm">
                    <span className="text-success mr-2">
                      <i className="fa fa-arrow-up" /> 3.48%
                    </span>{" "}
                    <span className="text-nowrap">Desde o último mês</span>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" xl="3">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Utilizadores Empresas
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">49,65%</span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-gradient-primary text-white rounded-circle shadow">
                        <i className="ni ni-chart-bar-32" />
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-sm">
                    <span className="text-success mr-2">
                      <i className="fa fa-arrow-up" /> 3.48%
                    </span>{" "}
                    <span className="text-nowrap">Desde o último mês</span>
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        <Row style={{ height: "324px" }}>
          <Col xl="4">
            <Card className="bg-white">
              <CardHeader>
                <h6 className="surtitle">Utilizador</h6>
                <h5 className="h3 mb-0">Vagas</h5>
              </CardHeader>

              <CardBody style={{ height: 310 }}>
                <IssApexCharts
                  type="bar"
                  height="250"
                  options={BarOptions}
                  series={[
                    {
                      name: "Population",
                      data: [30, 30, 40, 45],
                    },
                  ]}
                />
              </CardBody>
            </Card>
          </Col>

          <Col xl="4">
            <Card className="bg-white">
              <CardHeader>
                <h6 className="surtitle">Utilizador</h6>
                <h5 className="h3 mb-0">Indicações</h5>
              </CardHeader>

              <CardBody style={{ height: 310 }}>
                <IssApexCharts
                  type="pie"
                  height="350"
                  options={pie}
                  series={[44, 55]}
                />
              </CardBody>
            </Card>
          </Col>

          <Col xl="4">
            <Card className="bg-white">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-light text-uppercase ls-1 mb-1">
                      Visão geral
                    </h6>
                    <h5 className="h3 text-light mb-0">Utlizador</h5>
                  </div>
                  <div className="col"></div>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart" style={{ height: 250 }}>
                  <IssApexCharts
                    type="line"
                    height="220"
                    options={LineOptions}
                    series={[
                      {
                        name: "Income",
                        type: "column",
                        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
                      },
                      {
                        name: "Cashflow",
                        type: "column",
                        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
                      },
                      {
                        name: "Revenue",
                        type: "line",
                        data: [20, 29, 37, 36, 44, 45, 50, 58],
                      },
                    ]}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <div style={{ marginTop: "106px" }}></div>
        <Footer />
      </div>
    </>
  );
}
