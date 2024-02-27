import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import './css/Notification.css';

export const Notification = ({ notificationData }) => {
  return (
    <div className="notification">
      <div className='icon-background'>
        <ReceiptLongIcon style={{ 
          backgroundColor: '#131523', 
          color:'#8B8C8F',
          padding: '8px',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          }}
        />
      </div>
      <div className="notification-info">
        <p className="notification-title">
          {notificationData.title}
        </p>
        <p className="notification-description">
          {notificationData.description}
        </p>
      </div>
      <p className="cost">
        {notificationData.cost < 0 ? 
          `-${notificationData.cost}` : `+${notificationData.cost}`}
      </p>
    </div>
    
  )
}