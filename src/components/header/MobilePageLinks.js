import React from "react"
import { Link } from "gatsby"

const MobilePages = () => {
  return (
    <div className="mobile-pages-main">
      <div className="text-center">
        <p className="d-inline p-4">
          <Link to="/">
            <span className="text-c">Blog Home</span>
          </Link>
        </p>
        <p className="d-inline p-4">
          <Link to="/about">
            <span className="text-c">About</span>
          </Link>
        </p>
        <p className="d-inline p-4">
          <Link to="/archive">
            <span className="text-c">Archive</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default MobilePages
