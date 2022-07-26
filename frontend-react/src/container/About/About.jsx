import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      {abouts.map((data) => (
        <div className="app__head">
          {/* Heading */}
          <div className="app__head-title">
            About <span> Me</span>
          </div>
          {/* Content */}
          <div className="app__head-content">
            <div className="app__head-content-description">
              <p>{data.intro}</p>
              <p>{data.body}</p>
              <p>{data.salutation}</p>

              {/* <div className="app__head-recent-tech">
                <p>Here are the current technologies currently working with:</p>
                <ul>
                  <li>Flutter</li>
                  <li>React</li>
                  <li>Node</li>
                  <li>Flutter</li>
                  <li>React</li>
                  <li>Node</li>
                </ul>
              </div> */}
            </div>

            {/* Profile */}
            <div className="app__head-image">
              <motion.div
                whileHover={{ scale: 1.4, rotate: 360 }}
                whileTap={{
                  scale: 0.8,
                  // rotate: -90,
                  borderRadius: "100%",
                }}
              >
                <img src={urlFor(data.imgUrl)} alt="myImage" />
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
