import { dogs } from "../../data";

export default function Dogs() {
  return (
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
  );
}
