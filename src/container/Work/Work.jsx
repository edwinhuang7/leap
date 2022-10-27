import React from "react";
import { images } from "../../constants";
import "./Work.scss";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div>
      <div className="app__work app__flex">
        <div className="app__full-banner-item ">
          <div className="app__full-banner-text">
            <p className="large-text">Sharing Documents</p>
            <p className="p-text-black">
              Your lawyer will share documents related to your case with you, via LawConnect. Each time a document is shared by your lawyer, you will receive an email notification so you can access the document. If you already have a LawConnect
              account, you can login and an alert will be in your notifications tab that a document has been shared.
            </p>

            <motion.div whileHover={{ scale: 0.97 }}>
              <button className="button">Create Free Account</button>
            </motion.div>
          </div>
          <div className="img-responsive">
            <img src={images.shareDocs} alt="Hero Desktop" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
