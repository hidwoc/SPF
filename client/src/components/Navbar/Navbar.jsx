import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user }) => {
  const [visible, setVisible] = useState(true);
  // is the hamburger menu open?
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth)
      if (window.innerWidth > 771) {
        setVisible(true);
        setHamburger(false);
      } else {
        setVisible(false);
      }
    };
    handleResize();
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

// Hamburger Menu React&CSS from: https://git.generalassemb.ly/sei-nyc-flamingos/hamburger-time/blob/solution/src/components/Nav.jsx
// Additional Hamburger Menu HTML&CSS from: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
