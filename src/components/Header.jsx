import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import logo from "../assets/logo.svg";
import heroLeftImg from "../assets/desktop/image-hero-left.png";
import heroRightImg from "../assets/desktop/image-hero-right.png";
import heroImg from "../assets/tablet/image-hero.png";

const Header = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="hero column-space">
        <div className="left-image">
          <img src={heroLeftImg} alt="Hero Images containing users" />
        </div>
        <div className="small-size-header">
          <div className="hero-img">
            <img
              src={heroImg}
              alt="Hero image containing different user images"
            />
          </div>
        </div>
        <div className="hero-copy">
          <div className="hero-copy">
            <h1>Group Chat for Everyone</h1>
            <p>
              Meet makes it easy to connect with others face-to-face virtually
              and collaborate across any device.
            </p>
          </div>
          <div className="hero-cta">
            <button className="purple" type="button">
              Download <span>v1.3</span>
            </button>
            <button
              className="green"
              type="button"
              onClick={() => loginWithRedirect()}
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="right-image">
          <img src={heroRightImg} alt="Hero images containing users" />
        </div>
      </div>
    </header>
  );
};

export default Header;
