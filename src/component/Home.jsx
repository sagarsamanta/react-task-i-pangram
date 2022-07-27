import React from "react";
import Form from "./Form";

const Home = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ color: "blue", fontSize: "25px", fontWeight: "bold" }}>
          Pain & Functional Description
        </div>
        <div>The description of the current situation gives your Optimum</div>
        <div>
          Trainer a picture of and clues to the underlying causes of your
          problems
        </div>
        <div style={{ marginTop: "1rem" }}>
          If you have problems with pain/aches,stiffness,weakness of functional
          problem , descripbe
        </div>
        <div>
          {" "}
          this/those.(List the symptoms indescending order with most the
          troublesome first)
        </div>
      </div>
      <div
        style={{
          margin: "1rem 7rem 1rem 7rem",
          height: "5rem",
          width: "79.5rem",
          border: "1px solid #dfd7d7",
          borderRadius:'3px'
        }}
      ></div>
      <Form />
    </div>
  );
};

export default Home;
