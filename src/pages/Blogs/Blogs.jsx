import { useContext } from "react";
import BlogCard from "./BlogCard";
import { ThemeContext } from "../../provider/AuthProvider";

const Blogs = () => {
  const { blogs } = useContext(ThemeContext);
  return (
    <section className="bg-white ">
      <div className="py-8 px-5 mx-auto max-w-screen-2xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-16">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 ">
            Blogs
          </h2>
          <p className="font-light text-gray-500 sm:text-xl ">
            Expert Tips, Creative Ideas, and Inspiration <br /> for Your Special
            Occasions
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {blogs?.map((blog) => (
            <BlogCard key={blog.id} blog={blog}></BlogCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
