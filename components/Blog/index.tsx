import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light  py-14"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph=""
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
        <div className="flex justify-center flex-col items-center gap-2 mt-8">
            <button className="bg-primaryColor py-2 px-6 rounded-[8px] m-auto text-white font-bold">Explore Blogs</button>
            <p className="opacity-80 text-black">Connect with the Divine: Explore Our Blogs Section</p>
          </div>
      </div>
    </section>
  );
};

export default Blog;
