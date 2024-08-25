import React from "react";
import { useContext } from "react";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { color, setColor } = useContext(ThemeContext);
  const mode = () => setColor(!color);
  return (
    <nav className="navbar navbar-expand-sm container px-sm-3 py-lg-4 d-flex align-items-center justify-content-between">
      <Link
        to="/"
        className={`${color ? "text-white" : "text-black"} navbar-brand fs-4`}
      >
        React Country App
      </Link>
      <div onClick={mode} className="cursor d-flex align-items-center gap-2">
        {color ? (
          <MdOutlineDarkMode className="icon" />
        ) : (
          <MdLightMode className="icon" />
        )}
        <span>{color ? "Light mode" : "Dark mode"}</span>
      </div>
    </nav>
  );
}

export default Navbar;
