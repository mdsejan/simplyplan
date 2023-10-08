import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { FaStar } from "react-icons/fa6";

const Testimonial = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className=" py-12">
      <div className="max-w-screen-2xl mx-auto px-4 pb-8">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 text-center mb-20"
          data-aos="zoom-in"
          data-aos-duration="900"
        >
          {`What Our Clients Say`}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16 md:gap-6">
          {/* Testimonial 1 */}
          <div
            className="bg-white shadow-sm border rounded-md overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div className="p-6">
              <div className="flex items-center">
                <figure>
                  <img
                    className="w-14 h-14 rounded-full mx-auto mb-4"
                    src="https://i.ibb.co/stbWVcb/profile.jpg"
                    alt="Client 4"
                  />
                </figure>
                <div className="pb-3">
                  <h1 className="ml-4 font-semibold">Mark Thompson</h1>
                  <div className="text-blue-600 flex ml-4 mt-1">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                  </div>
                </div>
              </div>
              <p className="text-gray-800 text-xl mt-3">
                {`"Our wedding was a dream come true, thanks to the exceptional planning and attention to detail by the event agency. They made our special day truly magical!"`}
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div
            className="bg-white shadow-sm border rounded-md overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div className="p-6">
              <div className="flex items-center">
                <figure>
                  <img
                    className="w-12 h-12 rounded-full mx-auto mb-4"
                    src="https://i.ibb.co/8dfqmVq/Amanda-Rodriguez.jpg"
                    alt="Client 4"
                  />
                </figure>
                <div className="pb-3">
                  <h1 className="ml-4 font-semibold">Amanda Rodriguez</h1>
                  <div className="text-blue-600 flex ml-4 mt-1">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                  </div>
                </div>
              </div>
              <p className="text-gray-800 text-xl mt-3">
                {` "My daughter's birthday party was a huge success, and it was all thanks to the incredible work of this agency. They turned our backyard into a fairytale wonderland!"`}
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div
            className="bg-white shadow-sm border rounded-md overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div className="p-6">
              <div className="flex items-center">
                <figure>
                  <img
                    className="w-12 h-12 rounded-full mx-auto mb-4"
                    src="https://i.ibb.co/PG4p3Vk/Emily-Adams.webp"
                    alt="Client 4"
                  />
                </figure>
                <div className="pb-3">
                  <h1 className="ml-4 font-semibold">Emily Adams</h1>
                  <div className="text-blue-600 flex ml-4 mt-1">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                  </div>
                </div>
              </div>
              <p className="text-gray-800 text-xl mt-3">
                {`"We celebrated our 25th anniversary in style, and the event agency exceeded our expectations. The decorations, entertainment, and atmosphere were perfect!"`}
              </p>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div
            className="bg-white shadow-sm border rounded-md overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div className="p-6">
              <div className="flex items-center">
                <figure>
                  <img
                    className="w-12 h-12 rounded-full mx-auto mb-4"
                    src="https://i.ibb.co/syMg5b6/Olivia-Turner.jpg"
                    alt="Client 4"
                  />
                </figure>
                <div className="pb-3">
                  <h1 className="ml-4 font-semibold">Olivia Turner</h1>
                  <div className="text-blue-600 flex ml-4 mt-1">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                  </div>
                </div>
              </div>
              <p className="text-gray-800 text-xl mt-3">
                {`"Our engagement party was a hit, and we owe it all to the event agency. They helped us create unforgettable memories with our loved ones."`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
