import React from "react";
import Notification from "../../views/Notifications";

const NotificationsCard = ({ notifications }) => {
  return (
    <div className="flex-item small-card p-4">
      <div className="col notifications board">
        <div className="dashboard-title">
          <p className="boardTitle">Notifications</p>
        </div>
        <div className="notification-list">
          {notifications.map((notification, index) => (
            <>
              <Notification notificationData={notification} key={index} />
              {index < notifications.length - 1 && (
                <hr className="dark-divider" />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsCard;
