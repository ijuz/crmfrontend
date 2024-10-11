import React from "react";
import styles from "./Services.module.css";

const Services: React.FC = () => {
  return (
    <div className={styles.servicesBody}>
      <section className={styles.services}>
        <h2 className={styles.heading}>Our Services</h2>

        <div className={styles.content}>
          <div className={styles.illustration}>
            <img
              src="./images/Services_section_img-1.png"
              alt="VoIP Illustration"
              className={styles.illustrationImage}
            />
          </div>

          <div className={styles.textContent}>
            <h3 className={styles.serviceTitle}>CLI VOICE TERMINATION</h3>
            <p className={styles.serviceDescription}>
              Cloud Qlobe allows our wholesale VoIP service providers and
              carriers to do operations from anywhere in the world. The services
              will help clients to Connect, Buy or sell and offer high- end VoIP
              termination services to their customers. This wholesale VoIP &
              routes will allow our clients to generate new revenue
              opportunities in a stable and secure environment across a huge
              range of telecoms services.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.services}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h3 className={styles.serviceTitle}>CC VOICE SOLUTIONS</h3>
            <p className={styles.serviceDescription}>
              CC Traffic is a routing method used in call centers to efficiently
              control a high volume of calls. The routes involve advanced
              processes such as call request distribution, customer support
              resources, and call load balancing. CC Traffic refers to the
              traffic of phone calls that are received and routed through the
              call center. This typically includes incoming customer service
              calls, sales inquiries, and other types of communication. By
              analyzing call traffic data, businesses can determine their peak
              call volumes and optimize their routing strategies to ensure
              efficient handling of calls.
            </p>
          </div>

          <div className={styles.illustration}>
            <img
              src="./images/Services_section_img-2.png"
              alt="CC Voice Solutions Illustration"
              className={styles.illustrationImage}
            />
          </div>
        </div>
      </section>
      <section className={styles.services}>

        <div className={styles.content}>
          <div className={styles.illustration}>
            <img
              src="./images/Services_section_img-1.png"
              alt="VoIP Illustration"
              className={styles.illustrationImage}
            />
          </div>

          <div className={styles.textContent}>
            <h3 className={styles.serviceTitle}>CLI VOICE TERMINATION</h3>
            <p className={styles.serviceDescription}>
              Cloud Qlobe allows our wholesale VoIP service providers and
              carriers to do operations from anywhere in the world. The services
              will help clients to Connect, Buy or sell and offer high- end VoIP
              termination services to their customers. This wholesale VoIP &
              routes will allow our clients to generate new revenue
              opportunities in a stable and secure environment across a huge
              range of telecoms services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
