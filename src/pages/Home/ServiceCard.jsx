import { FaAnglesRight } from "react-icons/fa6";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ServiceCard = ({ service }) => {
  const { id, image, name, shortDescription, price } = service || {};

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="bg-white rounded-lg shadow-md"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
    >
      <figure className="p-3">
        <img src={image} alt="Service Image" className="w-full rounded-lg" />
      </figure>
      <div className="px-6 pt-6 pb-10">
        <div className="font-bold text-xl mb-4">{name}</div>

        <p className="text-gray-500 text-base">{shortDescription}</p>
        <p className="text-gray-500 text-xl mt-5">
          <span className="font-semibold  text-black">Price:</span> {price}
        </p>
        <Link to={`/service/${id}`}>
          <button className=" text-blue-600 border  hover:bg-black hover:text-white font-bold px-4 py-1 mt-8 rounded-full">
            <span className="flex items-center">
              See Details
              <FaAnglesRight className="ml-3"></FaAnglesRight>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
