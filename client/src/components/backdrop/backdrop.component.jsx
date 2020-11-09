import React from 'react'

import './backdrop.styles.scss'

const Backdrop = ({ clickHandler }) => {
    return (
        <div className="backdrop" onClick={clickHandler} />
    )
}

export default Backdrop