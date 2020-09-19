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
          Theme by{" "}
          <a className="text-info" href="https://willjw3.github.io/">
            @willjw3
          </a>
        </i>
      </p>
    </footer>
  )
}

export default Footer
