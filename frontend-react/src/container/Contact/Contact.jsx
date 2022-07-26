import React, { useState, useEffect } from "react";
import { client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Contact.scss";

const Contact = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const query = '*[_type == "profile"]';

    client.fetch(query).then((data) => {
      setProfile(data);
    });
  }, []);

  return (
    <div className="app__flex">
      <div className="app__contact">
        {/* Heading */}
        <div className="app__contact-heading">
          <h1>Get In Touch</h1>
        </div>
        {/* Main Content */}
        <div className="app__contact-content">
          <h2>
            Want to invite me for some <span>Coffee?</span>
          </h2>
        </div>
        {/* Button Link */}
        {profile.map((data) => (
          <div className="app__contact-btn">
            <a href={"mailto:" + data.email}>Offer Me A Coffee?</a>
          </div>
        ))}
    </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__contact"),
  "contact",
  "app__graybg"
);
