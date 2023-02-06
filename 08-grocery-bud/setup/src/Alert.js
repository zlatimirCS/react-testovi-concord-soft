import React from 'react'

const Alert = (props) => {
  return (
    <p className={"alert " + props.alertType}>{props.message}</p>
  )
}

export default Alert
