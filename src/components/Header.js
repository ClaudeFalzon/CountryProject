import React from "react";
/* import { IoEarthSharp } from "react-icons/io5"; */
import { AiOutlineDribbbleSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="nav_container">
      <div className="nav">
        <div className="logo-container">
          <p className="icon-logo">
            <Link className="text-link" to="/">
              <AiOutlineDribbbleSquare />
            </Link>
          </p>
          <h1>
            <Link className="text-link" to="/">
              <span> COUNTRY</span>
              <span
                style={{
                  fontStyle: "italic",
                  color: "rgb(192, 0, 128)"
                }}
              >
                FINDER
              </span>
            </Link>
          </h1>
        </div>
        <div className="basic-nav-choice">
          <p>
            <Link className="text-link annass" to="/about">
              About This Project{" "}
            </Link>
          </p>
          <p>
            <Link className="text-link annass" to="/contact">
              Contact Me
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
