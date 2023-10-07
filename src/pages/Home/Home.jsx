import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-screen-2xl mx-auto py-20 px-5">
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
