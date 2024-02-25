import { useState } from "react";
import ThinPeople from "../icons/ThinPeople";
import IcoPeople from "../icons/IcoPeople";
import DrawerArrow from "../icons/DrawerArrow";

const categoriesList = [
  "Mobile & Laptops",
  "Gaming Entertainment",
  "Image & Video",
  "Vehicles",
  "Furnitures",
  "Sport",
  "Food & Drinks",
  "Fashion Accessories",
  "Toilet & Sanitation",
  "Makeup Corner",
  "Baby Items",
];

const menuItems = [
  {
    title: 'Home',
    subItems: [
      { title: 'Home Two', to: '/home-two' },
      { title: 'Home Three', to: '/home-three' },
      { title: 'Home Four', to: '/home-four' },
    ],
  },
  { title: 'Shop', to: '/shops/shop' },
  {
    title: 'Pages',
    subItems: [
      { title: 'Privacy Policy', to: '/privacy-policy' },
      { title: 'FAQ', to: '/faq' },
      { title: 'Terms and Conditions', to: '/terms-condition' },
    ],
  },
  { title: 'About', to: '/about' },
  { title: 'Blogs', to: '/blogs' },
  { title: 'Contact', to: '/contact' },
];

export default function Drawer({ className, open, action }) {
  const [tab, setTab] = useState("category");
  return (
    <>
      <div
        className={`drawer-wrapper w-full  h-full relative block lg:hidden  ${
          className || ""
        }`}
      >
        {open && (
          <div
            onClick={action}
            className="w-full h-screen bg-black bg-opacity-40 z-40 left-0 top-0 fixed"
          ></div>
        )}
        <div
          className={`w-[280px] transition-all duration-300 ease-in-out h-screen overflow-y-auto overflow-x-hidden overflow-style-none bg-white fixed top-0 z-50 ${
            open ? "left-0" : "-left-[280px]"
          }`}
        >
          <div className="w-full px-5 mt-5 mb-4">
            <div className="flex justify-between items-center">
              <div className="flex space-x-5 items-center">
                <div className="compaire relative">
                      <ThinPeople />
                  <span className="w-[18px] h-[18px] rounded-full bg-qyellow absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                    2
                  </span>
                </div>
                <div className="favorite relative">
                      <ThinPeople />
                  <span className="w-[18px] h-[18px] rounded-full bg-qyellow absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                    1
                  </span>
                </div>
              </div>
              <button onClick={action} type="button">
              <DrawerArrow />
              </button>
            </div>
          </div>
          <div className="w-full mt-5 px-5">
            <div className="search-bar w-full h-[34px]  flex ">
              <div className="flex-1 bg-white h-full border border-r-0 border-[#E9E9E9]">
                <input
                  type="text"
                  className="w-full text-xs h-full focus:outline-none foucus:ring-0 placeholder:text-qgraytwo pl-2.5 "
                  placeholder="Search Product..."
                />
              </div>
              <div className="w-[40px] h-full bg-qyellow flex justify-center items-center">
              <DrawerArrow/>
              </div>
            </div>
          </div>
          <div className="w-full mt-5 px-5 flex items-center space-x-3">
            <span
              onClick={() => setTab("category")}
              className={`text-base font-semibold  ${
                tab === "category" ? "text-qblack" : "text-qgray"
              }`}
            >
              Categories
            </span>
            <span className="w-[1px] h-[14px] bg-qgray"></span>
            <span
              onClick={() => setTab("menu")}
              className={`text-base font-semibold ${
                tab === "menu" ? "text-qblack" : "text-qgray"
              }`}
            >
              Main Menu
            </span>
          </div>
          {tab === "category" ? (
            <div className="category-item mt-5 w-full">
              <ul className="list-none categories-list">
                {categoriesList.map((category,index)=>(
                  <li className="category-item" key={index}>
                    <a to="/all-products">
                      <div className=" flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                        <div className="flex items-center space-x-6">
                          <span>
                            <IcoPeople/>  
                          </span>
                          <span className="text-sm font-400">
                          {category}
                          </span>
                        </div>
                        <DrawerArrow/>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="menu-item mt-5 w-full">
              {menuItems.map((menuItem, index) => (
                <ul className="categories-list" key={index}>
                  <li className="category-item">
                    <a to={menuItem.to}>
                      <div className="flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                        <div className="flex items-center space-x-6">
                          <span className="text-sm font-400">{menuItem.title}</span>
                        </div>
                        <div>
                          <DrawerArrow/>
                        </div>
                      </div>
                    </a>
                    {menuItem.subItems && (
                      <ul className="submenu-list ml-5">
                        {menuItem.subItems.map((subItem, subIndex) => (
                          <li className="category-item" key={subIndex}>
                            <a to={subItem.to}>
                              <div className="flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                                <div className="flex items-center space-x-6">
                                  <span className="text-sm font-400">{subItem.title}</span>
                                </div>
                                <div>
                                <DrawerArrow/>
                                </div>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </ul>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
