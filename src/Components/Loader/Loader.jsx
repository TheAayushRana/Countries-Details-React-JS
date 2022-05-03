import React from "react";
import loading from "./loading.gif";

const Loader = ({ enable }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {enable ? <img src={loading} alt="loader" /> : ""}

      {/* {console.log(`${enable} loader`)} */}
    </div>
  );
};

export default Loader;
