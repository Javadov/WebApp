import React from 'react'

interface IAlertNotification {
    alertType: string
    title: string
    text: string
}

const AlertNotification: React.FC<IAlertNotification> = ({alertType = "warning", title, text}) => {
  return (
    <div className={`alert alert-${alertType} text-center`}>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default AlertNotification