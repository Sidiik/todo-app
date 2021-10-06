import React from "react";

const Todos = (props) => {
  return (
    <div className="container border border-primary p-2 mt-3 rounded d-flex justify-content-between align-items-center">
      <h5>{props.todo.text}</h5>
      <span
        className="bg-danger p-1 text-light"
        style={{
          maxHeight: "100%",
          borderRadius: "50%",
          flexBasis: "7%",
          textAlign: "center",
          padding: "0rem .4rem",
          fontSize: 17,
          cursor: "pointer",
        }}
      >
        &times;
      </span>
    </div>
  );
};

export default Todos;
