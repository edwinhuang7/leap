import React from "react";
import { images } from "../../constants";
import "./Header.scss";
import { motion } from "framer-motion";

const margin = {
  margin: "6rem 0rem 2rem 0rem",
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <div className="app__full-banner-item" style={margin}>
        <div className="app__full-banner-text">
          <p className="head-text">The place to work with your lawyer</p>
          <p className="p-text-white">
            Your lawyer uses LawConnect to share information with you about your
            legal case in a private,convenient and secure way.
          </p>
          <motion.div whileHover={{ scale: 0.97 }}>
            <button className="button">Create Free Account</button>
          </motion.div>
        </div>
        <div className="app__full-banner-image">
          <picture>
            <source srcset={images.heroMobile} media="(max-width: 500px)" />
            <source srcset={images.heroDesktop} media="(max-width: 1500px)" />
            <img src={images.heroDesktop} alt="Flowers" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Header;
