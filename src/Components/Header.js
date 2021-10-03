import React from 'react'
import "./Header.css"

const header = () => {
    return (
        <div className="header" >
           <div className="title">
              <h1><span>Chem</span>Swot</h1>    
           </div>
           <div className="tabs">
             <h2>Home </h2>
             <h2>Resources </h2>
             <h2>About </h2>
             <h2>Contact </h2>
           </div> 
        </div>
    )
}

export default header

