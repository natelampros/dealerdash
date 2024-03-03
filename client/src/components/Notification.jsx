import './css/Notification.css';

export const Notification = ({ notificationData }) => {
  const cost = notificationData.cost.toFixed(2);
  return (
    <div className="notification">
      <div className='icon-background'>
        {
          notificationData.icon
        }
      </div>
      <div className="notification-info">
        <p className="notification-title">
          {notificationData.title}
        </p>
        <p className="notification-description">
          {notificationData.description}
        </p>
      </div>
      {cost < 0 ? 
        (<p className="cost" style={{color: "#da615c"}}>
          {`${cost}`}
        </p>) : (<p className="cost" style={{color: "#64B864"}}>{`+${cost}`}</p>)
      }
      
    </div>
    
  )
}