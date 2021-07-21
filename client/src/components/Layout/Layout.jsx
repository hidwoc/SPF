import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar";

const Layout = (props) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-children">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;