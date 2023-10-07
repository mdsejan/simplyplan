const Banner = () => {
  return (
    <div className="xl:px-5 xl:py-10">
      <div
        className="hero rounded-lg min-h-[80vh] md:min-h-[50vh]  lg:min-h-[80vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/34FbD71/Wedding-Planning.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-90 xl:rounded-lg"></div>
        <div className="hero-content text-center text-white">
          <div className="xl:max-w-7xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10">
              Discover the Art of Celebration with Our Comprehensive Event
              Planning
            </h1>
            <p className="mb-5 text-base md:text-lg">
              Where Every Meticulous Detail Matters, Ensuring Memorable Moments
              for a Lifetime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
