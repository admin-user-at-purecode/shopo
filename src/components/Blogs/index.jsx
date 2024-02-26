import blog from '../../mock_data.json'
import BlogCard from "./BlogCard";
import DataIteration from "../DataIteration";
import PageTitle from "../PageTitle";
import Layout from "../Layout";

export default function Blogs() {
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="blogs-wrapper w-full-width">
        <div className="title-bar">
          <PageTitle
            title="Our Blogs"
            breadcrumb={[
              { name: "home", path: "/" },
              { name: "blogs", path: "/blogs" },
            ]}
          />
        </div>
      </div>
      <div className="w-full py-[60px]">
        <div className="container-x mx-auto">
          <div className="w-full">
            <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-[16px] gap-5 lg:grid-cols-3">
              <DataIteration
                datas={blog.blogs}
                startLength={0}
                endLength={blog.blogs.length}
              >
                {({ datas }) => (
                  <div
                    data-aos="fade-up"
                    key={datas.id}
                    className="item w-full"
                  >
                    <BlogCard datas={datas} />
                  </div>
                )}
              </DataIteration>
            </div>
          </div>
        </div>
      </div>
    </Layout>

  );
}