import Cart from "../Cart";
import ThinPeople from "../icons/ThinPeople";
import SearchBox from "../SearchBox";
import logo from "../../assets/images/logo.svg"

export default function Middlebar({ className, type }) {
  return (
    <div className={`w-full h-[86px] bg-white ${className}`}>
      <div className="container-x mx-auto h-full">
        <div className="relative h-full">
          <div className="flex justify-between items-center h-full">
            <img
              width="152"
              height="36"
              src={logo}
              alt="logo"
            />
            <div className="w-[517px] h-[44px]">
              <SearchBox type={type} className="search-com" />
            </div>
            <div className="flex space-x-6 items-center">
              <div className="compaire relative">
                    <ThinPeople />
                <span
                  className={`w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ${
                    type === 3 ? "bg-qh3-blue text-white" : "bg-qyellow"
                  }`}
                >
                  2
                </span>
              </div>
              <div className="favorite relative">
                  <ThinPeople />
                <span
                  className={`w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ${
                    type === 3 ? "bg-qh3-blue text-white" : "bg-qyellow"
                  }`}
                >
                  1
                </span>
              </div>
              <div className="cart-wrapper group relative py-4">
                <div className="cart relative cursor-pointer">
                    <ThinPeople />
                  <span
                    className={`w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ${
                      type === 3 ? "bg-qh3-blue text-white" : "bg-qyellow"
                    }`}
                  >
                    15
                  </span>
                </div>
                <Cart
                  type={type}
                  className="absolute -right-[45px] top-11 z-50 hidden group-hover:block"
                />
              </div>
              <div>
                  <ThinPeople />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
