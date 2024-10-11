import React from "react";
import styles from "./Footer.module.css";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className={`${styles.footer} bg-gray-800 text-white py-8`}>
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-start">
        <div className={`${styles.logoSection} mb-6 md:mb-0`}>
          <img
            src="images/logo.png"
            alt="Cloud Globe"
            className="w-40 mb-2"
          />
          <p className="text-sm">Connecting Continents</p>
          <p className="text-sm mt-4">Copyright © 2024 All Rights Reserved</p>
        </div>

        <div className={styles.linksSection}>
          <h3 className="text-orange-400 font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#rates"
                className="hover:text-orange-400 transition-colors"
              >
                Rates
              </a>
            </li>
            <li>
              <a
                href="#cc-routes"
                className="hover:text-orange-400 transition-colors"
              >
                CC Routes
              </a>
            </li>
            <li>
              <a
                href="#cli-voice"
                className="hover:text-orange-400 transition-colors"
              >
                CLI Voice Termination
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-orange-400 transition-colors"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.contactSection}>
          <div className="flex items-center mb-2">
            <Phone size={16} className="mr-2 text-orange-400" />
            <span>+44 7418365876</span>
          </div>
          <div className="flex items-center mb-2">
            <Mail size={16} className="mr-2 text-orange-400" />
            <a
              href="mailto:marketing@cloudqlobe.com"
              className="hover:text-orange-400 transition-colors"
            >
              marketing@cloudqlobe.com
            </a>
          </div>
          <div className="flex items-start">
            <MapPin size={16} className="mr-2 mt-1 text-orange-400" />
            <p>
              44 Heung Yip Road,
              <br />
              Southern District, Hong Kong,
              <br />
              ZIP CODE: 999077
            </p>
          </div>
        </div>
      </div>

      <div
        className={`${styles.socialIcons} mt-6 flex justify-center space-x-4`}
      >
        <a
          href="#facebook"
          className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          <span className="sr-only">Facebook</span>
          {/* Replace with actual Facebook icon */}F
        </a>
        <a
          href="#linkedin"
          className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-colors"
        >
          <span className="sr-only">LinkedIn</span>
          {/* Replace with actual LinkedIn icon */}
          In
        </a>
        <a
          href="#whatsapp"
          className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors"
        >
          <span className="sr-only">WhatsApp</span>
          {/* Replace with actual WhatsApp icon */}W
        </a>
      </div>
    </footer>
  );
};

export default Footer;
