import React from "react";
import "./Header.css";
import solCrow from "../solCrow.png";
export const Header = () => {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",

        alignItems: "center",
        padding: "0 20px",
        backgroundColor: "#040930",
        color: "white",
        height: "60px",
        width: "100%",
        position: "fixed",
        zIndex: "1",
      }}
    >
      <div
        className="header__left"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${solCrow})`,
            backgroundPosition: "center",
            backgroundSize: "center",
            backgroundRepeat: "no-repeat",
            height: "60px",
            width: "160px",
          }}
        ></div>
      </div>
      <div className="header__right">
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",

            "&:hover": {
              backgroundColor: "white",
              color: "black",
            },
          }}
        >
          Home
        </button>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Header;
