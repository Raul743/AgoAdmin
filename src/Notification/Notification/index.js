import React, { useState } from "react";
import NotificationList from "../../componentse/NotifictionList";
import NotificationContent from "../../componentse/NotificationContent";
import { Row, Col, Button, ButtonGroup } from "reactstrap";
import "./styles/index.css";
function Notification() {
  const [route, setRoute] = useState("/notification");
  const data = [
    {
      id: 1,
      name: "Nzinga António",
      content: "Lorem ipsum perspiciatis unde omnis iste natus error",
      time: "14:30",
    },
  ];
  return (
    <>
      <div className="notification">
        <Row>
          <Col xl="3">
            <div className="dark-sidebar-notification">
              <div className="notification-title">
                <p>Notificação</p>
              </div>
              <ul
                className="dark-menu"
                onClick={() => setRoute("/notification")}
              >
                <li>
                  <i className="mdi mdi-gmail"></i>
                  <p>Hoje</p>
                  <span class="badge badge-success ml-auto">3</span>
                </li>
                <li>
                  <i className="mdi mdi-star"></i>
                  <p>Lidos</p>
                </li>
                <li>
                  <i className="mdi mdi-send"></i>
                  <p>Draft</p>
                </li>
                <li>
                  <i className="mdi mdi-send"></i>
                  <p>Guardado</p>
                </li>
              </ul>
            </div>
          </Col>
          <Col xl="9">
            <div className="dark-main-notification">
              {route == "/notification" ? (
                <NotificationList
                  data={data}
                  changeStreen={(e) => setRoute(e)}
                />
              ) : route == "/read" ? (
                <NotificationContent />
              ) : (
                <> </>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default Notification;
