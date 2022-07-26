import React from "react";
import { useState, useEffect } from "react";
import { FaGithub, FaFolder, FaEye } from "react-icons/fa";
import { FiExternalLink, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

import "./Work.scss";

const Work = () => {
  const [activeFilter, setactiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'works']";
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setactiveFilter(item);
    // This will trigger and create a shuffle animation while changing categories
    setAnimateCard([{ y: 100, opacity: 0 }]);
    //
    setTimeout(() => {
      // Retriger the animation
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <>
      <h2 className="head-text">
        My <span>Side Hustle</span>
      </h2>
      <div className="app__work-filter">
        {["UI/UX", "Web App", "Mobile App", "Certificates", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            {/* Content */}
            <a
              href={work.projectLink}
              rel="noreferrer noopener"
              target="_blank"
            >
              <div className="app__work-content">
                {/* Github */}
                <div className="app__work-icons">
                  <FaFolder />
                  <div>
                    {/* DownloadLink */}
                    {work.download ? (
                      <a
                        href={work.download}
                        rel="noreferrer noopener"
                        target="_blank"
                        style={{ paddingLeft: "1rem" }}
                      >
                        <FiDownload />
                      </a>
                    ) : (
                      ""
                    )}

                    {/* Github */}
                    {work.github ? (
                      <a
                        href={work.github}
                        rel="noreferrer noopener"
                        target="_blank"
                        style={{ paddingLeft: "1rem" }}
                      >
                        <FaGithub />
                      </a>
                    ) : (
                      ""
                    )}

                    {/* Link */}
                    {work.projectLink ? (
                      <a
                        href={work.projectLink}
                        rel="noreferrer noopener"
                        target="_blank"
                        style={{ paddingLeft: "1rem" }}
                      >
                        <FiExternalLink />
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                {/* Title */}
                <h4 className="bold-text">{work.title}</h4>
                {/* Description */}
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work.description}
                </p>
                {/* Tags */}
                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="app__work-technologies">
                <ul>
                  {work.technologies.map((tech) => (
                    <li>{tech != null ? tech : "null"}</li>
                  ))}
                </ul>
              </div>
            </a>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
