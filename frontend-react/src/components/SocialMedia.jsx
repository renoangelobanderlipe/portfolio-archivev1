import React, { useState, useEffect } from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { client } from "../client";

const SocialMedia = () => {
  const [socials, setsocials] = useState([]);

  useEffect(() => {
    const query = '*[_type == "socials"]';

    client.fetch(query).then((data) => {
      setsocials(data);
    });
  }, []);

  return (
    <div className="app__social">
      {/* Instagram */}
      <div>
        {socials.map((link) => (
          <a href={link.instagram} rel="noreferrer noopener" target="_blank">
            <BsInstagram />
          </a>
        ))}
      </div>
      {/* Facebook */}
      <div>
        {socials.map((link) => (
          <a href={link.facebook} rel="noreferrer noopener" target="_blank">
            <FaFacebookF />
          </a>
        ))}
      </div>
      {/* Twitter */}
      <div>
        {socials.map((link) => (
          <a href={link.github} rel="noreferrer noopener" target="_blank">
            <BsGithub />
          </a>
        ))}
      </div>
      {/* Email */}
      <div>
        {socials.map((link) => (
          <a
            href={"mailto:" + link.email}
            rel="noreferrer noopener"
            target="_blank"
          >
            <HiOutlineMail />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
