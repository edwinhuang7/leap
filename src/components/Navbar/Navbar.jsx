import React, { useState } from "react";
import { images } from "../../constants";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["For People", "For Businesses", "Contact"].map((item) => (
          <li className="app__flex p-text">
            <div />
            <a href="">{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-logo">
        <ul className="app__navbar-links">
          {["Login"].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href="">{item}</a>
            </li>
          ))}
          <motion.div whileHover={{ scale: 0.97 }}>
            <button className="button">Create Free Account</button>
          </motion.div>
        </ul>
      </div>

      <div className="app__navbar-menu">
        <HiMenu onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: "easeOut" }}>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["For People", "For Businesses", "Contact"].map((item) => (
                <li key={item}>
                  <a href="" onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
