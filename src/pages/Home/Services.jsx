import { useContext, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { ThemeContext } from "../../provider/AuthProvider";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const { services } = useContext(ThemeContext);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <div className="text-center pb-20">
        <h2
          className="text-5xl font-bold"
          data-aos="zoom-in"
          data-aos-duration="900"
        >
          Our Services
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
