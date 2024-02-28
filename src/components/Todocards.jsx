import React, { useEffect, useState } from "react";

function Todocards({ values, setValues }) {
  const [privateTodoValues, setPrivateTodoValues] = useState([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setPrivateTodoValues(todos);
    }
  }, [values]);

  const deleteall = () => {
    localStorage.clear();
    setPrivateTodoValues([]);
    setValues([]);
  };

  // const handlecheck = (id)=> {
  //   setValues((prev) => [
  //    prev.map((todo)=>{
  // todo.id==id ? !todoCheck : todoCheck;
  // })

  //   ]);
  // }

  const handlecheck = (id) => {
    setValues((prev) =>
      prev.map((todo) =>
        todo.todoID == id ? { ...todo, todoCheck: !todo.todoCheck } : todo
      )
    );
  };

  return (
    <div className="flex items-center justify-center">
      <div className="sm:w-4/5 w-4/5">
        {/* {privateTodoValues.map((i) => (
          <div 
            key={i.todoID}
            className={i.todoCheck ? " w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-4 flex justify-content"
                                   : " w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base dark:bg-gray-700 dark:border-gray-600 dark:text-white line-through mb-4 flex justify-content"}
          >
           <input className="mr-2" type="checkbox" value={i.todoCheck}  checked={!i.todoCheck}  onChange={()=>handlecheck(i.todoID)} /> {i.todoTask}
          </div>
        ))} */}

        {privateTodoValues !== null &&
          privateTodoValues.map((i) => (
            <div
              key={i.todoID}
              className={
                i.todoCheck
                  ? "w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-4 flex justify-content"
                  : "w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base dark:bg-gray-700 dark:border-gray-600 dark:text-white line-through mb-4 flex justify-content"
              }
            >
              <input
                className="mr-2"
                type="checkbox"
                value={i.todoCheck}
                checked={!i.todoCheck}
                onChange={() => handlecheck(i.todoID)}
              />{" "}
              {i.todoTask}
            </div>
          ))}

        <button
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600
           hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={deleteall}
        >
          clear all
        </button>
      </div>
    </div>
  );
}

export default Todocards;
