import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { client } from "../../client";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [download, setDownload] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'resume']";

    client.fetch(query).then((data) => {
      setDownload(data);
    });
  }, []);

  return (
    <nav className="app__navbar">
      {/* Logo */}
      <div className="app__navbar-logo">
        <a href="#" rel="noreferrer noopener">
          PEANUT
        </a>
        {/* <img src={images.logo} alt="logo" /> */}
      </div>

      {/* Nav Links */}
      <ul className="app__navbar-links">
        {/* {["home", "about", "work", "skills", "testimonial", "contact"].map( */}
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <div className="app__navbar-resume">
            <a href='/assets/Banderlipe_RenoAngelo.pdf' download>

              Resume
            </a>
        </div>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a onClick={() => setToggle(false)} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
              <a
                href="/assets/Banderlipe_RenoAngelo.pdf"
                download
                className="app__sidebar-resume"
              >
                Resume
              </a>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
