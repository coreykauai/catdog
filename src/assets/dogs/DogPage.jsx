import DogList from "./DogList";

export default function DogPage({ dogs }) {
  return (
    <div className="dogside">
      <h1>Dog Names</h1>
      <DogList dogs={dogs} />
    </div>
  );
}
