import React from "react";
import { images } from "../../constants";
import "./Signing.scss";
import { motion } from "framer-motion";

const Signing = () => {
  return (
    <div>
      <div className="app__signing app__flex">
        <div className="app__full-banner-item">
          <div className="img-responsive">
            <img src={images.signDocsDesktop} alt="Hero Desktop" />
          </div>
          <div className="app__full-banner-text">
            <p className="large-text">Signing Documents Electronically</p>
            <p className="p-text-black">LawConnect integrates with Docusign to provide our users with a quick, easy and secure way to sign important legal documents online.</p>

            <motion.div whileHover={{ scale: 0.97 }}>
              <button className="button">Create Free Account</button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signing;
