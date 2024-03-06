import Cat from "./Cat";

export default function CatList({ cats }) {
  return (
    <div className="catss">
      {cats.map((cat) => {
        return <Cat key={cat.id} cat={cat} />;
      })}
    </div>
  );
}
