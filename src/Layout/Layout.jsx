import Footer from "../Components/LayoutComponents/Footer";
import Navbar from "../Components/LayoutComponents/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
