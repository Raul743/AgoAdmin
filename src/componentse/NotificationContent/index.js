import React from "react";
import { Card, CardBody, CardTitle, Media } from "reactstrap";
import Profile from "./julio.jpg";
import "./styles/index.css";
function NotificationContent() {
  return (
    <div>
      <div className="dark-notification-content">
        <div className="dark-notification-title">
          <p>Notificação</p>
        </div>
        <div className="dark-notification-viewer">
          <div className="dark-avatar">
            <div>
              <img src={Profile} width={50} height={50} alt="Image" />
            </div>
            <div>
              <p>Nzinga Enoque António</p>
              <p>925014552</p>
            </div>
          </div>
          <p>
            Dear USer Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem.Nulla consequat massa quis enim. Donec pede justo, fringilla
            vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. enean leo ligula, porttitor eu, consequat vitae,
            eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
            feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
            libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
            blandit vel, luctus pulvinar,
          </p>
        </div>
      </div>
    </div>
  );
}
export default NotificationContent;
