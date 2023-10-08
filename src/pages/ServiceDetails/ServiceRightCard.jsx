import PropTypes from "prop-types";

const ServiceRightCard = ({ service }) => {
  const { address, price, participateLimit } = service || {};
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
      </div>
    </>
  );
};

ServiceRightCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceRightCard;
