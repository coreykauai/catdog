import CatList from "./CatList";

export default function CatPage({ cats }) {
  return (
    <div className="catSide">
      <h1 className="catTitle">Cat Names</h1>
      <CatList cats={cats} />
    </div>
  );
}
