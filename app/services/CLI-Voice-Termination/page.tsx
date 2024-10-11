import styles from "./CLIVoiceTermination.module.css";

const CLIVoiceTermination = () => {
  return (
    <section className={`bg-gray-100 py-10 ${styles.section}`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="./images/Services_section_img-2.png" // Ensure to add an image in the public/images directory
            alt="CLI Voice Termination"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold mb-4">CLI Voice Termination</h2>

          <h3 className="text-2xl font-semibold mb-2">
            High-end VOIP termination services
          </h3>
          <p className="text-lg mb-4">
            Cloud Qlobe allows our wholesale VoIP service providers and carriers
            to do operations from anywhere in the world. The services will helps
            clients to Connect, Buy or sell and offer high-end VoIP termination
            services to their customers
          </p>

          <h3 className="text-2xl font-semibold mb-2">Revenue Opportunities</h3>
          <p className="text-lg mb-6">
            CC Traffic refers to the traffic of phone calls that are received
            and routed through the call center. This typically includes incoming
            customer service calls, sales inquiries, and other types of
            communication. By analyzing call traffic data, businesses can
            determine their peak call volumes and optimize their routing
            strategies to ensure efficient handling of calls.
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

export default CLIVoiceTermination;
