import React from "react";

const Todos = (props) => {
  return (
    <div className="container border border-primary p-2 mt-3 rounded">
      <h5>{props.todo.text}</h5>
    </div>
  );
};

export default Todos;
