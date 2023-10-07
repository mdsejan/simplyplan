import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div>
      <div className="text-center pb-20">
        <h2 className="text-5xl font-bold">Our Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
      </div>
    </div>
  );
};

export default Services;
