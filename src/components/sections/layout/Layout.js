import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";
import Main from "../../primitives/layout/Main";
import Modal from "./Modal";

/**
 * @type {React.FC}
 */
const Layout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <SiteFooter />
      <Modal />
    </>
  );
};

export default Layout;
