import React from 'react'
import notfound from './notfound.png'

const NotFound = () => {
    return (
        <div>
            <h1>Not Found</h1>
            <img src={notfound} style={{width: "150px"}}alt="" />
            <p className="lead">The page you are looking for does not exist...</p>
        </div>
    )
}

export default NotFound
