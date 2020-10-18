import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"


import { FaLinkedin,FaSun, FaMoon} from "react-icons/fa"
import MobileSocialLinks from "./MobileSocialLinks"
import MobilePageLinks from "./MobilePageLinks"
import SocialLinks from "./SocialLinks"
import MobileBio from "./MobileBio"
import "./header.css"

const Header = ({ siteTitle, tagline, author, contacts }) => {
  console.log(localStorage.getItem("darkTheme"))

  let darkTheme = false
  if (localStorage.getItem("darkTheme") == "true") {
    console.log('asdfasdasdf')
    darkTheme=true
    switchTheme()
  }
  
  
  function changeTheme() {
    darkTheme = !darkTheme
    localStorage.setItem('darkTheme', darkTheme);

    switchTheme()

    changeDarkThemeIcons()
  }

  function switchTheme(){
    if (darkTheme) {
      console.log("Dark Mode")
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      console.log("Light Mode")
      document.documentElement.removeAttribute("data-theme", "dark")
    }
  }

  function changeDarkThemeIcons(){
    document.getElementById("faSun").style.display = darkTheme?"block":"none"
    document.getElementById("faSun").style.opacity = darkTheme?"1":"0"

    document.getElementById("faMoon").style.display = darkTheme?"none":"block"
    document.getElementById("faMoon").style.opacity = darkTheme?"0":"1"

    
  }


  return (
    <header 
    className="head-main"
    style={{
      background: `black`,
    }}>
        <div
          className="head-elements"
          style={{
            margin: `0`,
            padding: `.75rem`,
          }}
        >
          <h1 className="head-logo ml-4" style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <div style={{display: "flex"}}>
          <SocialLinks contacts={contacts} />
          <div class="darkModeSwitch" onClick={changeTheme} >
            <FaSun id="faSun" size={25} style={{ color: "yellow", 
            display:darkTheme?"block":"none", opacity: darkTheme?"1":"0" }}></FaSun>
            <FaMoon id="faMoon" size={25} style={{ color: "white", 
            display: darkTheme?"none":"block", opacity: darkTheme?"0":"1" }} ></FaMoon>
          </div>

          </div>

        </div>
        <MobileSocialLinks contacts={contacts} />
        <MobilePageLinks />
      <MobileBio author={author} />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
