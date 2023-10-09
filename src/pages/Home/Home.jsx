import { useEffect } from "react";
import Banner from "./Banner";
import Services from "./Services";
import Aos from "aos";
import "aos/dist/aos.css";
import Testimonial from "./Testimonial";
import Teams from "./Teams";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-screen-2xl mx-auto py-20 px-5">
        <Services></Services>
      </div>
      <Teams></Teams>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
