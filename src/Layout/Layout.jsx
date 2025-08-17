import Footer from "../Components/LayoutComponents/Footer";
import Navbar from "../Components/LayoutComponents/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="sticky top-0 z-50 ">
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
