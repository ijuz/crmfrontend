"use client";

import React from "react";
import styles from "./VoiceOfferings.module.css";


interface Offering {
  icon?: string;
  subtitle?: string;
}

const VoiceOfferings: React.FC = () => {
   const offerings: Offering[] = [
     {
       icon: "/services/QuickSettings.png",
       subtitle: "Quick Setup",
     },
     {
       icon: "/services/QuickLive.png",
       subtitle: "Quick Live in 10 minutes",
     },
     {
       icon: "/services/Payments.png",
       subtitle: "Multiple Payment Option",
     },
     {
       icon: "/services/Freecredit.png",
       subtitle: "Free $2 Credit",
     },
     {
       icon: "/services/No Balance Limit.png",
       subtitle: "No Balance Limit",
     },
     {
       icon: "/services/Helpdesk.png",
       subtitle: "24/7 Helpdesk",
     },
   ];

  return (
    <div className={styles.voiceOfferingsContainer}>
      <section className={styles.voiceOfferings}>
        <div className={styles.offeringsGrid}>
          {offerings.map((offering, index) => (
            <div key={index} className={styles.offeringItem}>
              {offering.icon && (
                <img
                  src={offering.icon}
                  alt={offering.subtitle}
                  className={styles.offeringIcon}
                  // style={{ width: "122px", height: "122px" }}
                />
              )}
              {/* <h3 className={styles.offeringTitle}>{offering.subtitle}</h3> */}
              {offering.subtitle && (
                <p className={styles.offeringSubtitle}>{offering.subtitle}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VoiceOfferings;
