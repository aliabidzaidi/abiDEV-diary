import React from "react"

import "./header.css"
import abidzaidi from "../../images/cartoon-x.png"

const MobileBio = props => {
  return (
    <div className="mobile-bio-main">
      <img
        src={abidzaidi}
        className="ml-4 mt-2"
        style={{
          maxWidth: `75px`,
          maxHeight: `75px`,
          borderRadius: `50%`,
          boxShadow: `1px 1px 3px`,
        }}
        alt="author-pic"
      />
      <h4 className="mr-4 mt-4 profile-name">{props.author}</h4>
    </div>
  )
}

export default MobileBio
