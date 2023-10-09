import { FaBoxOpen, FaArrowRightLong } from "react-icons/fa6";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { id, title, fullDescription, category, publish } = blog || {};
  return (
    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="bg-[#DBEAFD] text-blue-600 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
          <FaBoxOpen className="mr-2"></FaBoxOpen>
          {category}
        </span>
        <span className="text-sm"> {publish} </span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        <a href="#"> {title} </a>
      </h2>
      <p className="mb-5 font-light text-gray-500">
        {fullDescription.slice(0, 300)} .....
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            className="w-7 h-7 rounded-full"
            src="https://i.ibb.co/KDyj8sj/Jesse-Leos.jpg"
            alt="Jese Leos avatar"
          />
          <span className="font-medium">Jesse Leos</span>
        </div>
        <Link
          to={`/blogdetails/${id}`}
          state={title}
          className="inline-flex items-center font-medium text-blue-600 hover:underline"
        >
          Read more
          <FaArrowRightLong className="ml-2"></FaArrowRightLong>
        </Link>
      </div>
    </article>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object,
};

export default BlogCard;
