import React, { useContext } from "react";
import Navbar from "../components/UI/Navbar";
import Routing from "../router/Routing";
import { ThemeContext } from "../context/ThemeContext";

function MainLayout() {
  const { color, setColor } = useContext(ThemeContext);
  return (
    <>
      <header className={`${color ? "darkbg" : "lightbg"} p-2`}>
        <Navbar />
      </header>
      <main className={`${color ? "darkbg" : "lightbg"} p-4 mainbg`}>
        <div className="container">
          <Routing />
        </div>
      </main>
      <footer
        className={`${color ? "darkbg" : "lightbg"} darkbg p-4 text-white`}
      >
        <div className="container">
          <p className={`${color ? "text-white" : "text-black"} mb-0`}>
            Copyright &copy; 2023
          </p>
        </div>
      </footer>
    </>
  );
}

export default MainLayout;
