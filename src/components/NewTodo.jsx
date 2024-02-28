import React from "react";
import { useState, useEffect, useRef } from "react";

function NewTodo({ setValues, values }) {
  const [task, setTask] = useState("");

  useEffect(() => {
    setValues(JSON.parse(localStorage.getItem("todos")));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(values));
  // }, [values]);

  const isInitialMount = useRef(true);
  useEffect(() => {
    // Skip the effect on the initial render
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      localStorage.setItem("todos", JSON.stringify(values));
    }
  }, [values]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "") {
      alert("empty value not acceptable");
    } else {
      setValues((prev) => [
        ...prev,
        {
          todoID: Date.now(),
          todoTask: task,
          todoCheck: true,
        },
      ]);
      alert("task added succesfully");
      setTask("");
    }
  };

  return (
    <div className="flex items-center justify-center mt-4  mb-4">
      <div className="sm:w-4/5 w-full">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-10 w-full justify-center sm:ml-0 ml-11"
        >
          <input
            id="todo-input"
            className=" col-span-5 sm:col-span-9 block w-full p-4 text-gray-900 border
           border-gray-300 rounded-lg
           bg-gray-50 text-base focus:ring-blue-500
            focus:border-blue-500 dark:bg-gray-700
             dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white dark:focus:ring-blue-500
               dark:focus:border-blue-500"
            type="text"
            onChange={handleChange}
            placeholder="Enter your task"
            value={task}
          />

          <button
            type="submit"
            className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br  text-2xl rounded-lg font-bold px-5 py-2.5 w-32 ml-1"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewTodo;
