import Youtube from "../icons/Youtube";
import logo from  "../../assets/images/logo.svg"
import paymentlogo from  "../../assets/images/payment-getways.png"

const helpfulLinks   = [
  {
    id:"1",
    text: "Flash Sale"
  },
  {
    id:"2",
    text: "FAQ"
  },
  {
    id:"3",
    text: "Support"
  }
]
const generalLinks   = [
  {
    id:"1",
    text: "Blog"
  },
  {
    id:"2",
    text: "Tracking Order"
  },
  {
    id:"3",
    text: "Become Seller"
  }
]
const featureLinks   = [
  {
    id:"1",
    text: "About Us"
  },
  {
    id:"2",
    text: "Terms Condition"
  },
  {
    id:"3",
    text: "Best Products"
  }
]

export default function Footer({ type }) {
  return (
    <footer className="footer-section-wrapper bg-white print:hidden">
      <div className="container-x block mx-auto pt-[56px]">
        <div className="w-full flex flex-col items-center mb-[50px]">
          <div className="mb-[40px] footerLogo">
            <img
                  width="152"
                  height="36"
                  src={logo}
                  alt="logo"
                />
          </div>
          <div className="w-full h-[1px] bg-[#E9E9E9]"></div>
        </div>
        <div className="lg:flex justify-between mb-[50px] footerItemsContainer">
          <div className="lg:w-[424px]  ml-0 w-full mb-10 lg:mb-0">
            <h1 className="text-[18] font-500 text-[#2F2F2F] mb-5">About Us</h1>
            <p className="text-[#9A9A9A] text-[15px] w-[247px] leading-[28px]">
              We know there are a lot of threa developers our but we pride into
              a firm in the industry.
            </p>
          </div>
          <div className="flex-1 lg:flex">
            <div className="lg:w-1/3 w-full mb-10 lg:mb-0">
              <div className="mb-5">
                <h6 className="text-[18] font-500 text-[#2F2F2F]">Feature</h6>
              </div>
              <div>
                <ul className="flex flex-col space-y-4 ">
                {
                    featureLinks.map((item =>(
                      <li key  = {item.id}>
                      <a to="">
                        <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                          {item.text}
                        </span>
                      </a>
                    </li>
                    )))
                  }
                </ul>
              </div>
            </div>
            <div className="lg:w-1/3 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0 ">
              <div>
                <div className="mb-5">
                  <h6 className="text-[18] font-500 text-[#2F2F2F]">
                    General as
                  </h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-4 ">
                  {
                    generalLinks.map((item =>(
                      <li key  = {item.id}>
                      <a to="">
                        <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                          {item.text}
                        </span>
                      </a>
                    </li>
                    )))
                  }
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0">
              <div>
                <div className="mb-5">
                  <h6 className="text-[18] font-500 text-[#2F2F2F]">Helpful</h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-4 ">
                  {
                    helpfulLinks.map((item =>(
                      <li key  = {item.id}>
                      <a to="">
                        <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                          {item.text}
                        </span>
                      </a>
                    </li>
                    )))
                  }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-bar border-t border-qgray-border lg:h-[82px] lg:flex justify-between items-center footerBottom">
          <div className="flex lg:space-x-5 justify-between items-center mb-3 footerIconsContainer" >
            <div className="flex space-x-5 items-center">
              <a href="#">
                <Youtube className="fill-current text-qgray hover:text-qblack" />
              </a>
              <a href="#">
                <Youtube className="fill-current text-qgray hover:text-qblack" />
              </a>
              <a href="#">
                <Youtube className="fill-current text-qgray hover:text-qblack" />
              </a>
            </div>
            <span className="sm:text-base text-[10px] text-qgray font-300">
              ©2022
              <a
                href=""
                className="font-500 text-qblack mx-1"
              >
                Quomodosoft
              </a>
              All rights reserved
            </span>
          </div>
          <div className="footerImagesContainer">
              <img
                width="318"
                height="28"
                src={paymentlogo}
                alt="payment-getways"
              />
          </div>
        </div>
      </div>
    </footer>
  );
}