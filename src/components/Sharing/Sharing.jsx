import React from "react";
import { images } from "../../constants";
import "./Sharing.scss";
import { motion } from "framer-motion";

const Sharing = () => {
  return (
    <div>
      <div className="app__sharing app__flex">
        <div className="app__full-banner-item ">
          <div className="app__full-banner-text">
            <p className="large-text">Sharing Documents</p>
            <p className="p-text-black">
              Your lawyer will share documents related to your case with you,
              via LawConnect. Each time a document is shared by your lawyer, you
              will receive an email notification so you can access the document.
              If you already have a LawConnect account, you can login and an
              alert will be in your notifications tab that a document has been
              shared.
            </p>

            <motion.div whileHover={{ scale: 0.97 }}>
              <button className="button" id="buttonHide">
                Create Free Account
              </button>
            </motion.div>
          </div>
          <div className="app__full-banner-image">
            <img src={images.shareDocs} alt="Hero Desktop" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sharing;
