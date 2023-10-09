import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <section className="bg-white ">
      <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 ">
            Blogs
          </h2>
          <p className="font-light text-gray-500 sm:text-xl ">
            Expert Tips, Creative Ideas, and Inspiration <br /> for Your Special
            Occasions
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
