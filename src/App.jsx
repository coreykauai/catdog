import { useState } from "react";
import "./App.css";
import { students, cats, dogs } from "./data";

function App() {
  return (
    <div className="bodie">
      <div className="usGuys">
        <h1 className="title">Students</h1>
        {students.map((student) => {
          return <h2 key={student.id}>{student.name}</h2>;
        })}
      </div>
      <div className="dogos">
        <h1>Dog Names</h1>
        {dogs.map((dog) => {
          return (
            <div key={dog.id} className="dog-card">
              <h2>{dog.name}</h2>
              <p>Age: {dog.age}</p>
              <p>Breed: {dog.breed}</p>
            </div>
          );
        })}
      </div>

      <div className="catss">
        <h1 className="catTitle">Cat Names</h1>
        {cats.map((cat) => {
          return (
            <div key={cat.id} className="cat-card">
              <h2>{cat.name}</h2>
              <p>Age: {cat.age}</p>
              <p>Breed: {cat.breed}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
