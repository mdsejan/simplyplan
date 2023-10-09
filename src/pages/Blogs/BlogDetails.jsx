import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../provider/AuthProvider";

const BlogDetails = () => {
  const [blog, setBlog] = useState([]);
  const { title, fullDescription } = blog || {};

  const { id } = useParams();
  const { blogs } = useContext(ThemeContext);

  useEffect(() => {
    const findBlog = blogs?.find((blog) => blog.id === id);
    setBlog(findBlog);
  }, [id, blogs]);

  return (
    <div className="max-w-screen-2xl mx-auto py-12 px-5">
      <div className="mx-auto max-w-screen-sm text-center mb-16">
        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 ">
          {title}
        </h2>
      </div>
      <div
        className="max-w-screen-md mx-auto text-lg"
        dangerouslySetInnerHTML={{
          __html: fullDescription?.replace(/\n/g, "<br />"),
        }}
      />
    </div>
  );
};

export default BlogDetails;
