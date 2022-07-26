import React, { useState, useEffect } from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { client } from "../../client";

import "./Footer.scss";

const Footer = () => {
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "socials"]';

    client.fetch(query).then((data) => {
      setSocialLinks(data);
    });
  }, []);

  return (
    <div className="app__footer">
      <div className="app__footer-socials">
        {socialLinks.map((data) => (
          <>
            <ul>
              <li>
                <a
                  href={data.facebook}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href={data.instagram}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a
                  href={"mailto:" + data.email}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <HiOutlineMail />
                </a>
              </li>
              <li>
                <a href={data.github} rel="noreferrer noopener" target="_blank">
                  <BsGithub />
                </a>
              </li>
            </ul>
            <div className="app__footer-title">
              Crafted by  <a href={data.facebook} rel="noreferrer noopener" target="_blank"> Reno Angelo Banderlipe</a>
            </div>

            <div className="app__footer-email">
              <a href={"mailto:" + data.email} rel="noreferrer noopener">
                <HiOutlineMail /> personal.renoangelo@gmail.com
              </a>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Footer;
