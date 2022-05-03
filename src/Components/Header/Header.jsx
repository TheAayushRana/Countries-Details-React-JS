import React from "react";
import "./Header.css";

const Header = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div
      className={`countries__header flex__row section__padding 
      bg-${darkMode ? "dark" : "$white"}`}
    >
      <div className="countries__header__logo">
        <h3>
          <a href="/">Where in the world?</a>
        </h3>
      </div>
      <div className="countries__header__content">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Dark Mode
            {/* {console.log(!darkMode)} */}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
