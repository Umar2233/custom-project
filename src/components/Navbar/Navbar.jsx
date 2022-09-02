import React, { useContext, useState } from "react";
import "./navbar.scss";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { SetTitleCate } from "../../Context";

const Navbar = () => {
  const { setTitle } = useContext(SetTitleCate);

  const [open, setOpen] = useState(false);

  const cateLists = [
    "Social Media",
    "FaceBook",
    "Instagram",
    "Linkedin",
    "Reddit",
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <Link to="/">
          <img src="assets/images/logo.png" alt="Nothing" className="logo" />
        </Link>
        <div className="menu">
          <div className="slection" onClick={() => setOpen(!open)}>
            <button className="cate">Categories</button>
            <FontAwesomeIcon icon={faAngleDown} />
            {open && (
              <div className="dropdown">
                {cateLists.map((list, index) => (
                  <Link
                    to="/categories"
                    key={index}
                    onClick={() => setTitle(list)}
                    className="item"
                  >
                    {list}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/about" className="about">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
