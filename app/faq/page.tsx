"use client";

import React, { useState } from "react";
import styles from "./FAQ.module.css";

const image1 = "/Banner/FAQ.png";

// Defining the FAQ type
type FAQItem = {
  question: string;
  answer: string;
};

// Defining the FAQ list type
const faqs: FAQItem[] = [
  {
    question: "What is VoIP",
    answer:
      "Voice over Internet Protocol (VoIP), also known as IP or internet telephony, is a technology developed to facilitate the conversion of voice into digital signal for transmission over the internet vs the traditional Public Switched Telephone Networks (PSTN). It can be used for making or receiving calls from Mobile Phones, Computers, and IP Phones.",
  },
  {
    question: "How does it work?",
    answer:
      "VoIP entails using packet-switched protocols, converting analog voice signals into data packets that are transmitted over an internet network using Session Initiation Protocol (SIP). The data packets are again converted to analog voice signals before they reach the receiver when, you make a call.",
  },
  {
    question: "What is hosted VoIP?",
    answer:
      "Hosted VoIP refers to VoIP services wherein the hardware is installed at an off-site location by the service provider. It is a beneficial option for organizations which would like to outsource the VoIP infrastructure and its maintenance to a third-party service provider, while using the services in their offices.",
  },
  {
    question: "Is VoIP secure?",
    answer:
      "Calls made over VoIP are highly secure as they are encrypted, thus preventing all possibilities of data interception. VoIP is a great option for people looking to secure their organization’s communications.",
  },
  {
    question: "Why should I opt for VoIP for my business?",
    answer:
      "A VoIP solution allows users to make calls while accessing a number of other software programs like email, e-fax, and remote conferencing. An internet connection is all that is needed to access phone calls from anywhere in the world. Businesses can also decrease costs by opting for VoIP instead of PSTN (Public Switched Telephone Network) as long-distance calls on VoIP are cheaper, along with increased productivity and flexibility by multitasking.",
  },
  {
    question: "Does switching to VoIP affect call quality?",
    answer:
      "The call quality on VoIP depends upon your internet connection and the network of your Internet Service Provider. It also depends on the service level chosen, the destination of the call, and the available bandwidth. Superior Quality of Service (QoS) plays an important role in ensuring minimal call drops, delay and packet loss. All of these factors help improve the quality of VoIP calls.",
  },
  {
    question: "Do you provide A-Z and CC voice termination services?",
    answer:
      "Yes, Cloud Qlobe is offering wholesale and call center services to Carriers, Tier 1 Carriers, Customers and Communication Service Providers alike.",
  },
];

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Filtered FAQs based on search term
  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <div className="w-full mt-16">
        <img
          src={image1}
          alt="Static Image"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className={styles.faqContainer}>
        <h1 className={styles.faqTitle}>Frequently Asked Questions</h1>
        <input
          type="text"
          placeholder="Search FAQs..."
          className={styles.faqSearchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="bg-white shadow-md rounded-lg">
          {filteredFAQs.length === 0 ? (
            <p className="text-center p-4">No results found.</p>
          ) : (
            filteredFAQs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h2
                  className={styles.faqQuestion}
                  onClick={() => handleToggle(index)}
                >
                  {faq.question}
                </h2>
                {expandedIndex === index && (
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
