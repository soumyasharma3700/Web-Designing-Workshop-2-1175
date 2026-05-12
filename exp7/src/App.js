import React from "react";
import Student from "./Student";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <h1>Student Details</h1>

      <Student name="Rahul" course="BCA" marks="85" />
      <Student name="Priya" course="B.Tech" marks="92" />
      <Student name="Aman" course="MCA" marks="78" />
    </div>
  );
}

export default App;