import PropTypes from "prop-types";

const ServiceLeftCard = ({ service }) => {
  const { name, image, fullDescription } = service || {};
  return (
    <>
      <figure>
        <img
          className="w-full max-h-[60vh] object-cover"
          src={image}
          alt={name}
        />
      </figure>
      <div className="py-10">
        <p className="text-justify">{fullDescription}</p>
      </div>
    </>
  );
};

ServiceLeftCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceLeftCard;
