import Image from "next/image";
import styles from "./CCRoutes.module.css";

const CCRoutes = () => {
  return (
    <section className={`bg-gray-100 py-10 ${styles.section}`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <Image
            src="./images/Services_section_img-1.webp" // Ensure to add an image in the public/images directory
            alt="CLI Voice Termination"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold mb-4">CC Voice Solutions</h2>

          <h3 className="text-2xl font-semibold mb-2">CC Traffic</h3>
          <p className="text-lg mb-4">
            CC Traffic are routing method that are used in call centers to
            efficiently control high volume of calls. The routes involves
            advance processes such as call request distribution, customer
            support resources, and call load balancing.
          </p>

          <h3 className="text-2xl font-semibold mb-2">CC Trafic LifeCycle</h3>
          <p className="text-lg mb-6">
            CC Traffic refers to the traffic of phone calls that are received
            and routed through the call center. This typically includes incoming
            customer service calls, sales inquiries, and other types of
            communication. By analyzing call traffic data, businesses can
            determine their peak call volumes and optimize their routing
            strategies to ensure efficient handling of calls
          </p>

          {/* <div className="text-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Get Started Today
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CCRoutes;
