import React, { useState, useEffect, useRef } from "react";

const Task = ({ onAdd, onClear, projectState }) => {
  const [enteredTask, setEnteredTask] = useState();

  function handleOnChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleAddTask() {
    if (enteredTask !== "") {
      onAdd({
        id: Math.floor(Math.random() * 10000),
        task: enteredTask,
      });
      setEnteredTask("");
      console.log("task is added");
    } else {
      console.log("plese enter value");
    }
  }

  const ActiveProject = projectState.projects.find(
    (project) => project.Id === projectState.selectedProjectId
  );

  return (
    <section>
      <div className=" w-[60rem] ml-32 mt-10 items-center   ">
        <h2 className=" text-2xl font-bold m-3  ">Tasks</h2>
        <div>
          <input
            type="text"
            className=" m-3  h-[2.5rem] p-2 w-[20rem] rounded-md outline-none bg-stone-300 "
            onChange={handleOnChange}
            value={enteredTask}
          />
          <button
            className=" h-[2.5rem] w-[7rem]  text-lg hover:rounded-md  hover:bg-black  hover:text-white"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>

        {ActiveProject.tasks.length !== 0 ? (
          <div className=" bg-stone-200  w-[43rem]   rounded-md m-3 ">
            <ul className=" m-3  text-lg ">
              {ActiveProject.tasks.map((item) => {
                return (
                  <li className="   p-3 flex justify-between" key={item.id}>
                    <p>{item.task}</p>
                    <button
                      className=" h-[2.5rem] w-[7rem]  text-lg hover:rounded-md  hover:bg-black  hover:text-white"
                      onClick={() => onClear(item.id)}
                    >
                      Clear
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <p className=" m-3 font-medium text-lg ">There is no task yet </p>
        )}
      </div>
    </section>
  );
};

export default Task;
