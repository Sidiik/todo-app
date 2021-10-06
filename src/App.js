import React, { useEffect, useState } from "react";
import AddTodo from "./components/Form";
import Todos from "./components/Todos";
import { db } from "./firebase";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="container-fluid  card w-50 p-3 mt-3">
      <h3 className="text-center">Todo App</h3>
      <AddTodo setTodos={setTodos} todos={todos} />
      <>
        {loading && "Loading..."}
        {!todos.length < 0 && setLoading(false)}
        {todos.map((todo) => (
          <Todos key={todo.id} todo={todo} />
        ))}
      </>
    </div>
  );
};

export default App;
