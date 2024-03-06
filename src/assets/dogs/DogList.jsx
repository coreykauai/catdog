import Dog from "./Dog";

export default function DogList({ dogs }) {
  return (
    <div className="dogos">
      {dogs.map((dog) => {
        return <Dog key={dog.id} dog={dog} />;
      })}
    </div>
  );
}
