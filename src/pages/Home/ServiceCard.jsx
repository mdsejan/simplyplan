import { FaAnglesRight } from "react-icons/fa6";

const ServiceCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <figure className="p-3">
        <img
          src="https://i.ibb.co/b2SsHPp/Anniversary-Celebration.jpg"
          alt="Service Image"
          className="w-full rounded-lg"
        />
      </figure>
      <div className="px-6 pt-6 pb-10">
        <div className="font-bold text-xl mb-4">Service Name</div>

        <p className="text-gray-700 text-base">
          Short description of the service goes here. This is a brief overview
          of what the service offers.
        </p>
        <p className="text-gray-900 text-xl mt-5">
          <span className="font-bold">Price:</span> $99.99
        </p>
        <button className=" text-blue-600 border  hover:bg-black hover:text-white font-bold px-4 py-1 mt-8 rounded-full">
          <span className="flex items-center">
            See Details
            <FaAnglesRight className="ml-3"></FaAnglesRight>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
