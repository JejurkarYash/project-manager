import React, { useEffect, useState } from "react";
import Task from "./Task.jsx";

const ProjectView = ({ project, onDelete, onAdd, onClear, projectState }) => {
  let formattedDate = new Date(project.DueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  console.log();

  return (
    <div className=" flex flex-col ">
      <header>
        <div className=" w-[60rem] ml-32  items-center mt-24  ">
          <div className=" flex justify-between  w-[43rem] m-3  ">
            <h1 className=" text-3xl font-bold    ">{project.Title}</h1>
            <button
              className=" h-[2.5rem] w-[7rem]  text-lg hover:rounded-md  hover:bg-black  hover:text-white"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>

          <p className=" m-3 text-lg text-stone-400  ">
            <span>{formattedDate}</span>
          </p>
          <p className=" m-3 text-lg whitespace-pre-wrap  w-[40rem]  ">
            {project.Discription}{" "}
          </p>
          <hr className=" mt-10 border-2 border-stone-400 w-[43rem]" />
        </div>
      </header>

      {/* Task List  */}
      <Task onAdd={onAdd} onClear={onClear} projectState={projectState} />
    </div>
  );
};

export default ProjectView;
