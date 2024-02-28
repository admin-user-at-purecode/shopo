import IcoPeople from "../icons/IcoPeople";
import Arrow from "../icons/DrawerArrow"

export default function BlogCard({ className, datas }) {
  return (
    <div
      className={`blog-card-wrapper w-full border border-[#D3D3D3] ${
        className || ""
      }`}
    >
      <div className="img w-full h-[300px] lg:h-[280px]">
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/${
            datas.picture
          }`}
          alt="blog"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-[24px] flex flex-col space-y-1.5 mt-2">
        <div className="short-data flex space-x-9 items-center mb-3">
          <div className="flex space-x-2 items-center">
          <IcoPeople />
            <span className="text-sm text-qgraytwo capitalize">
              By {datas.by}
            </span>
          </div>
          <div className="flex space-x-2 items-center">
          <IcoPeople/>
            <span className="text-sm text-qgraytwo">
              {datas.comments_length} Comments
            </span>
          </div>
        </div>
        <div className="details">
          <a to="/blogs/blog">
            <h1 className="text-[20px] text-qblack hover:text-blue-500 font-semibold line-clamp-2 mb-1 capitalize lg:text-[18px]">
              {datas.title}
            </h1>
          </a>
          <p className="text-qgraytwo text-[15px] leading-[30px] line-clamp-2 mb-3 lg:text-[14px]">
            {datas.article}
          </p>
          <a href="#">
            <div className="flex items-center space-x-2">
              <span className="text-qblack text-[14px] font-semibold">
                View More
              </span>
              <Arrow/>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
