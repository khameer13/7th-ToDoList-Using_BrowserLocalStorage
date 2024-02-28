import { useState } from "react";
import logo from "/logo.png";
import Todocards from "./components/Todocards";
import NewTodo from "./components/NewTodo";

function App() {
  const [values, setValues] = useState([]);
    // {
    //   todoID: "",
    //   todoTask: "",
    //   todoCheck: false,
    // },
  

  return (
    <>
      <div className=" bg-gradient-to-r from-slate-300 to-slate-500  min-h-screen">
        <div className="flex  flex-col justify-center items-center  ">
          <img className="w-36 h-36 ml-4" src={logo} alt="" />
        </div>
        <NewTodo setValues={setValues} values={values} />
        <Todocards setValues={setValues} values={values} />
      </div>
    </>
  );
}

export default App;
