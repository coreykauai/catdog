export default function Cat({ cat }) {
  return (
    <div className="cat-card">
      <h2>{cat.name}</h2>
      <p>Age: {cat.age}</p>
      <p>Breed: {cat.breed}</p>
    </div>
  );
}
