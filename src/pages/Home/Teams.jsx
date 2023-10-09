import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Teams = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section
      className="max-w-screen-2xl mx-auto px-5 py-12 mb-8"
      data-aos="zoom-in"
      data-aos-delay="300"
      data-aos-duration="1200"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[50vh] rounded-sm">
        <div className="lg:col-span-2 bg-gray-800 flex flex-col justify-center items-center lg:rounded-s py-12">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            Meet
          </h1>
          <h4 className="text-2xl md:text-4xl font-bold text-white">
            Our Teams
          </h4>
        </div>
        <div className="lg:col-span-3 bg-gray-300 lg:rounded-e">
          <div className="grid grid-cols-2 md:grid-cols-3">
            {/* Team Member 1 */}
            <div className="grayscale relative group overflow-hidden bg-gray-200 hover:bg-blue-500 hover:text-white">
              <img
                src="https://i.ibb.co/KDyj8sj/Jesse-Leos.jpg"
                alt="John Doe"
                className="w-full h-[16rem] object-cover"
              />
              <div className="absolute inset-0 flex items-end justify-start p-4 opacity-0 group-hover:opacity-80 transition-opacity bg-[#1F2937]">
                <div>
                  <h3 className="text-white text-xl font-bold">John Smith</h3>
                  <p className="text-white">CEO & Founder</p>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="grayscale relative group overflow-hidden bg-gray-200 hover:bg-blue-500 hover:text-white">
              <img
                src="https://i.ibb.co/stbWVcb/profile.jpg"
                alt="Jane Smith"
                className="w-full h-[16rem] object-cover"
              />
              <div className="absolute inset-0 flex items-end justify-start p-4 opacity-0 group-hover:opacity-80 transition-opacity bg-[#1F2937]">
                <div>
                  <h3 className="text-white text-xl font-bold">
                    Daniel Miller
                  </h3>
                  <p className="text-white">Event Coordinator</p>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="grayscale relative group overflow-hidden bg-gray-200 hover:bg-blue-500 hover:text-white">
              <img
                src="https://i.ibb.co/84GwWYN/David-Clark.webp"
                alt="Bob Johnson"
                className="w-full h-[16rem] object-cover"
              />
              <div className="absolute inset-0 flex items-end justify-start p-4 opacity-0 group-hover:opacity-80 transition-opacity bg-[#1F2937]">
                <div>
                  <h3 className="text-white text-xl font-bold">David Clark</h3>
                  <p className="text-white">Marketing Manager</p>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="grayscale relative group overflow-hidden bg-gray-200 hover:bg-blue-500 hover:text-white">
              <img
                src="https://i.ibb.co/K2NY0Qk/author.jpg"
                alt="John Doe"
                className="w-full h-[16rem] object-cover"
              />
              <div className="absolute inset-0 flex items-end justify-start p-4 opacity-0 group-hover:opacity-80 transition-opacity bg-[#1F2937]">
                <div>
                  <h3 className="text-white text-xl font-bold">
                    Emily Johnson
                  </h3>
                  <p className="text-white">Creative Director</p>
                </div>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="grayscale relative group overflow-hidden bg-gray-200 hover:bg-blue-500 hover:text-white">
              <img
                src="https://i.ibb.co/PG4p3Vk/Emily-Adams.webp"
                alt="Jane Smith"
                className="w-full h-[16rem] object-cover"
              />
              <div className="absolute inset-0 flex items-end justify-start p-4 opacity-0 group-hover:opacity-80 transition-opacity bg-[#1F2937]">
                <div>
                  <h3 className="text-white text-xl font-bold">
                    Olivia Martinez
                  </h3>
                  <p className="text-white">Venue Manager</p>
                </div>
              </div>
            </div>

            {/* Team Member 6 */}
            <div className="grayscale relative group overflow-hidden bg-gray-200 hover:bg-blue-500 hover:text-white">
              <img
                src="https://i.ibb.co/8dfqmVq/Amanda-Rodriguez.jpg"
                alt="Bob Johnson"
                className="w-full h-[16rem] object-cover"
              />
              <div className="absolute inset-0 flex items-end justify-start p-4 opacity-0 group-hover:opacity-80 transition-opacity bg-[#1F2937]">
                <div>
                  <h3 className="text-white text-xl font-bold">Emma Parker</h3>
                  <p className="text-white">Social Media Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
