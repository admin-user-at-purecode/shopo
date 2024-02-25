import ThinPeople from "./icons/ThinPeople"; 
import banner from "../assets/images/discount-banner-1.jpg"

export default function DiscountBanner({ className}) {
  return (
    <div
      className={`discount-banner w-full h-[307px] bg-cover flex justify-center items-center ${
        className || ""
      }`}
      style={{
        background: `url(${banner}) no-repeat`,
        backgroundSize: "cover",
      }}
    >
        <div>
          <div data-aos="fade-up">
            <h1 className="sm:text-3xl text-xl font-700 text-qblack mb-2 text-center">
              Get <span className="mx-1 text-qyellow">20%</span> Off Discount
              Coupon
            </h1>
            <p className="text-center sm:text-[18px] text-sm font-400">
              by Subscribe our Newsletter
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="sm:w-[543px] w-[300px] h-[54px] flex mt-8"
          >
            <div className="flex-1 bg-white pl-4 flex space-x-2 items-center h-full focus-within:text-qyellow text-qblack">
            <ThinPeople/>
              <input
                type="email"
                name="email"
                className="w-full h-full focus:outline-none text-sm placeholder:text-xs placeholder:text-qblack text-qblack font-400 tracking-wider"
                placeholder="EMAIL ADDRESS"
              />
            </div>
            <button
              type="button"
              className="sm:w-[158px] w-[80px]  h-full bg-qyellow text-sm font-600"
            >
              Get the Coupon
            </button>
          </div>
        </div>
    </div>
  );
}
