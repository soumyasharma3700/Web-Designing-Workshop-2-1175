function Student(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        margin: "10px",
        width: "250px",
        borderRadius: "10px",
        boxShadow: "0px 0px 5px gray",
      }}
    >
      <h2>{props.name}</h2>
      <p>Course: {props.course}</p>
      <p>Marks: {props.marks}</p>
    </div>
  );
}

export default Student;