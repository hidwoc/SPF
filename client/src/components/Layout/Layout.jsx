import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import beach from "./beach.png";
import "./Layout.css";
const Layout = (props) => {
  return (
    <div className="layout">
      <Navbar user={props.user} />
      {/* <div id="background-img"> */}
      <img src={beach} alt="beach-image" id="background" />
      {/* </div> */}
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
