export default function Students({ students }) {
  return (
    <div className="usGuys">
      <h1 className="title">Students</h1>
      {students.map((student) => {
        return <h2 key={student.id}>{student.name}</h2>;
      })}
    </div>
  );
}
