import PropTypes from "prop-types";
import { toast } from "react-toastify";

const ServiceRightCard = ({ service }) => {
  const { address, price, participateLimit } = service || {};

  const handleBookNow = () => {
    toast.success(" Booking Successfull!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <>
      <div className="shadow p-6 rounded-sm">
        <h1 className="text-xl font-semibold text-center mb-5">
          Service Details
        </h1>
        <div className="divider"></div>
        <p className="mb-3">
          <span className="font-bold"> Location: </span> {address}
        </p>
        <p className="mb-3">
          <span className="font-bold"> Price: </span> {price}
        </p>
        <p>
          <span className="font-bold"> participate: </span>
          {participateLimit}
        </p>

        <div className="flex justify-center mt-10">
          <button
            onClick={handleBookNow}
            className="py-2 px-6 rounded font-bold bg-blue-500 hover:bg-blue-600 text-white"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

ServiceRightCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceRightCard;
