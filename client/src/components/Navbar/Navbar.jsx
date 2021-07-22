import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav>
      <div className="navbar">
        <Link to="/">SPF</Link>
        <div className="links">
          <Link to="/sunscreens">SUNSCREENS</Link>
          {user ? (
            <Link to="/add-sunscreen">ADD NEW</Link>
          ) : (
            <Link to="sign-up">SIGN UP</Link>
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
