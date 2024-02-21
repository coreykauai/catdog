import { cats } from "../../data";

export default function Cats() {
  return (
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
  );
}
