import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../provider/AuthProvider";
import ServiceLeftCard from "./ServiceLeftCard";
import ServiceRightCard from "./ServiceRightCard";

const ServiceDetails = () => {
  const [service, setService] = useState([]);
  const { name } = service || {};

  const { id } = useParams();
  const { services } = useContext(ThemeContext);

  useEffect(() => {
    const findService = services.find((service) => service.id === id);
    setService(findService);
  }, [id, services]);

  return (
    <div>
      <div className="min-h-[20vh]  flex flex-col justify-center items-center text-center py-8 px-5">
        <div className="badge bg-[#E7EFFB] text-blue-600 badge-outline mb-5">
          Service
        </div>
        <h1 className="text-3xl font-semibold">{name} </h1>
      </div>
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 py-20 px-5">
        <div className="md:col-span-2 shadow-sm border p-4 rounded-sm">
          <ServiceLeftCard service={service}></ServiceLeftCard>
        </div>
        <div>
          <ServiceRightCard service={service}></ServiceRightCard>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
