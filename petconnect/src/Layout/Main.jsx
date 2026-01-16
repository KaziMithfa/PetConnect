import { Outlet } from "react-router-dom";
import NavBar from "../Common/NavBar/NavBar";
import Footer from "../Common/Footer/Footer";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-76px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
