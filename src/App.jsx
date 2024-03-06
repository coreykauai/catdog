import { useState } from "react";
import "./App.css";
import "./assets/cats/cat.css";
import "./assets/dogs/dog.css";
import { Routes, Route } from "react-router";
import { cats, students, dogs } from "./data";
import Students from "./assets/studente/Students";
import DogPage from "./assets/dogs/DogPage";
import CatPage from "./assets/cats/CatPage";

function App() {
  return (
    <div className="bodie">
      <Routes>
        <Route path="/" element={<Students students={students} />} />
        <Route path="/dogs" element={<DogPage dogs={dogs} />} />
        <Route path="/cats" element={<CatPage cats={cats} />} />
      </Routes>
    </div>
  );
}

export default App;
