import ThinBag from "../icons/ThinPeople";
import Middlebar from "./Middlebar";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import logo from "../../assets/images/logo.svg"
import ThreeBars from "../icons/ThreeBars";


export default function Header({ className, drawerAction, type = 1 }) {
  return (
    <header className={` ${className || ""} header-section-wrapper relative`}>
      <TopBar className="quomodo-shop-top-bar" />
      <Middlebar
        type={type}
        className="quomodo-shop-middle-bar lg:block hidden"
      />
      <div className="quomodo-shop-drawer lg:hidden block w-full h-[60px] bg-white">
        <div className="w-full h-full flex justify-between items-center px-5">
          <div onClick={drawerAction}>
            <ThreeBars/>
          </div>
          <div>
          <img
              width="152"
              height="36"
              src={logo}
              alt="logo"
            />
          </div> 
          <div className="cart relative cursor-pointer">
              <ThinBag />
            <span
              className={`w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ${
                type === 3 ? "bg-qh3-blue text-white" : "bg-qyellow text-qblack"
              }`}
            >
              15
            </span>
          </div>
        </div>
      </div>
      <Navbar type={type} className="quomodo-shop-nav-bar lg:block hidden" />
    </header>
  );
}
