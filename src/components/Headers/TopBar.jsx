import Arrow from "../icons/Arrow";
import Selectbox from "../Selectbox";
import countryLogo from "../../assets/images/country-logo-16x16.png"

export default function TopBar({ className }) {
  return (
    <>
      <div
        className={`w-full bg-white h-10 border-b border-qgray-border ${
          className || ""
        }`}
      >
        <div className="container-x mx-auto h-full">
          <div className="flex justify-between items-center h-full">
            <div className="topbar-nav">
              <ul className="flex space-x-6">
                <li>
                    <span className="text-xs leading-6 text-qblack font-500">
                      Account
                    </span>
                </li>
                <li>
                    <span className="text-xs leading-6 text-qblack font-500">
                      Track Order
                    </span>
                </li>
                <li>
                    <span className="text-xs leading-6 text-qblack font-500">
                      Support
                    </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
