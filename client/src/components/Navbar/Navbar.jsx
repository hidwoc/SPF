import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user }) => {
  const [visible, setVisible] = useState(true);
  // is the hamburger menu open?
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // if we're at desktop size
      if (window.innerWidth > 600) {
        // make the nav visible
        setVisible(true);
        // untoggle the hamburger menu
        setHamburger(false);
      } else {
        // otherwise...
        //   make the nav invisible
        setVisible(false);
      }
    };
    // add an event listener to the resize event on the window
    window.addEventListener("resize", handleResize);
    // unmounts we'll remove that event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <div className="navbar">
        <div className="welcome">
          <Link to="/">SPF</Link>
        </div>
        <div id="hamburger-div">
          <i
            className="fa fa-bars"
            id="hamburger-logo"
            onClick={() => setHamburger(!hamburger)}
          ></i>
        </div>
        <div className="links" style={{ display: visible || hamburger ? "flex" : "none" }} >
          <Link to="/sunscreens">SUNSCREENS</Link>
          {user ? (
            <Link to="/add-sunscreen">ADD NEW</Link>
          ) : (
            <Link to="/sign-up">SIGN UP</Link>
          )}
          {user ? (
            <Link to="/sign-out">SIGN OUT</Link>
          ) : (
            <Link to="/sign-in">LOGIN</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// Hamburger Menu HTML&CSS from: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
