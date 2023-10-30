import React, { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const addTodo = () => {
    if (inputText.trim() !== "") {
      const isTodoExist = todos.some((todo) => todo.text === inputText);

      if (!isTodoExist) {
        const newTodos = [...todos, { text: inputText, completed: false }];
        setTodos(newTodos);
        setInputText("");
      } else {
        alert("Esta tarea ya existe");
      }
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const clearTodos = () => {
    setTodos([]);
  };

  const pendingTasksMessage =
    todos.length === 0
      ? "No hay tareas pendientes, añadir tareas"
      : `Tienes ${todos.length} ${
          todos.length === 1 ? "tarea" : "tareas"
        } pendientes`;

  return (
    <div className="container">
      <h1>Mi Todo List con React</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />
        <button className="btn btn-success" onClick={addTodo}>
          Agregar
        </button>
        <button className="btn btn-danger" onClick={clearTodos}>
          Limpiar tareas
        </button>
      </div>

      <p className="text-muted">{pendingTasksMessage}</p>

      <ul className="list-group">
        {todos.map((todo, index) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={index}
          >
            <span>{todo.text}</span>
            <button
              className="btn btn-danger btn-sm delete-button"
              onClick={() => removeTodo(index)}
            >
              Borrar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;











