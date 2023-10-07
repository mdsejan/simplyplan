import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../provider/AuthProvider";

const ServiceDetails = () => {
  const [service, setService] = useState([]);
  const { id } = useParams();

  const { services } = useContext(ThemeContext);

  useEffect(() => {
    const findService = services.find((service) => service.id === id);
    setService(findService);
  }, [id, services]);

  console.log(service);

  return (
    <div className="max-w-screen-2xl mx-auto min-h-screen py-20 px-5">
      <h2>Service Details for {id}</h2>
    </div>
  );
};

export default ServiceDetails;
