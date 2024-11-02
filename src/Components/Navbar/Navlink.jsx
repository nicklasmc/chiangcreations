import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Navlink.css";

const Navlink = ({ children, scrollToClassName, smooth = "smooth", offset = 0, duration = 500 }) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(`.${scrollToClassName}`);
    if (targetSection) {
      const offsetPosition = targetSection.offsetTop + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: smooth,
      });
    }
  };

  return (
    <div
      className="Navlink-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`#${scrollToClassName}`} className="Navlink-link" onClick={handleClick}>
        {children}
        <motion.span
          className="Navlink-underline"
          style={{
            scaleX: hovered ? 1 : 0,
            transition: `transform ${duration}ms`,
          }}
        />
      </Link>
    </div>
  );
};

export default Navlink;
