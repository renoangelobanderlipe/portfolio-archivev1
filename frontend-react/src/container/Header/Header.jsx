import React, { useState, useEffect } from "react";
import { AppWrap } from "../../wrapper";
import { client } from "../../client";

import "./Header.scss";

const Header = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const query = '*[_type == "profile"]';

    client.fetch(query).then((data) => {
      setProfile(data);
    });
  }, []);

  return (
    <div className="app__header">
      {profile.map((data) => (
        <div>
          <div className="app__header-greetings">
            Hi <span style={{ fontSize: 30 }}>👋</span>, <span>I am</span>
          </div>
          <div className="app__header-profile">
            <div>
              {data.firstname} <br />
              <span>{data.lastname}.</span>
            </div>
          </div>
          <h3>{data.tagline}</h3>
          <p>{data.description}</p>
          <div className="app__header-btn">
            <a href={`#${"contact"}`}>Hire Me</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppWrap(Header, "home");
