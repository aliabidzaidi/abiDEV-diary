import React from "react"

const Footer = () => {
  return (
    <footer className="text-center">
      <hr />
      <p className="d-inline">Abid Zaidi's DEV diary</p>
      <p className="mt-5 text-muted d-inline">
        <i>
          {" "}
          Built with
          {` `}
          <a className="text-info" href="https://www.gatsbyjs.org">
            Gatsby
          </a>{" "}
          Theme by @willjw3
        </i>
      </p>
    </footer>
  )
}

export default Footer
