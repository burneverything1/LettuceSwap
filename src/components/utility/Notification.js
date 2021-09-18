import React from 'react'

const Notification = ({ message, type }) => {

    const notifStyle = {
        color: type,
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10
    }

    if (message === null){      // if no message, nonexistant
        return null
    }

    return (
        <div style={notifStyle}>
            {message}
        </div>
    )
}

export default Notification