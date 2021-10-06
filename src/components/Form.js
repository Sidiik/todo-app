import React, { useRef } from "react";
import { FormGroup, Form, FormLabel, Button } from "react-bootstrap";
import { db } from "../firebase";

const AddTodo = (props) => {
  const todoRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const todoValue = todoRef.current.value;
    const newTodo = {
      id: Math.random(),
      text: todoValue,
    };
    if (todoValue) {
      db.collection("todos").add(newTodo);
    }
    todoRef.current.value = "";
  };
  return (
    <div className="">
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Form.Control ref={todoRef} type="text" placeholder="Your todo" />
        </FormGroup>
        <Button type="submit" className="mt-2 w-100">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddTodo;
