import React from "react";
import { Notification } from "../Notification";

const NotificationsCard = ({ notifications }) => {
  return (
    <div className="flex-item small-card p-4">
      <div className="col notifications board">
        <div className="dashboard-title">
          <p className="boardTitle">Notifications</p>
        </div>
        <div className="notification-list">
          {notifications.map((notification, index) => {
            return (
              <>
                <Notification notificationData={notification} />
                {index < notifications.length - 1 ? (
                  <hr className="dark-divider" />
                ) : null}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NotificationsCard;
