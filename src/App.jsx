import { useState } from "react";
import "./App.css";
import Students from "./assets/components/Students";
import Dogs from "./assets/components/Dogs";
import Cats from "./assets/components/Cats";

function App() {
  return (
    <div className="bodie">
      <Students />
      <Dogs />
      <Cats />
    </div>
  );
}

export default App;
