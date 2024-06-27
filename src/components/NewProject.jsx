import React from "react";
import { useState, useRef, forwardRef } from "react";
import Inputs from "./Inputs";

const NewProject = ({ onCancel, onSave }) => {
  let title = useRef();
  let discription = useRef();
  let dueDate = useRef();

  //   function for handling the save button
  function handleOnSave() {
    let Title = title.current.value.trim();
    let Discription = discription.current.value.trim();
    let DueDate = dueDate.current.value;

    if (Title !== "" && Discription !== " " && DueDate !== "") {
      onSave({
        Title,
        Discription,
        DueDate,
        Id: Math.floor(Math.random() * 10000),
        tasks: [],
      });
    } else {
      console.log("Validation Error");
    }

    title.current.value = "";
    discription.current.value = " ";
    dueDate.current.value = " yyyy-MM-dd";
  }

  return (
    <div className=" flex flex-col items-center mt-16  w-[60rem]  ml-20   ">
      <menu className="flex  items-center  space-x-3  justify-end  gap-4 my-4  w-[22rem]    ">
        <li>
          <button
            className=" h-[2.5rem] w-[7rem] font-medium text-lg hover:rounded-md  hover:bg-black  hover:text-white "
            onClick={onCancel}
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            className=" h-[2.5rem] w-[7rem] font-medium text-lg rounded-md  bg-black text-white "
            onClick={handleOnSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div className=" flex flex-col justify-start mr-32  ">
        <Inputs label="Title " ref={title} />
        <Inputs label="Discription" ref={discription} textarea />
        <Inputs label="Due Date" type="date" ref={dueDate} />
      </div>
    </div>
  );
};

export default NewProject;
