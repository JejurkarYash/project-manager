import React from "react";
import { useState, useRef, forwardRef } from "react";
import Inputs from "./Inputs";
import ErrorModel from "./ErrorModel.jsx";

const NewProject = ({ onCancel, onSave }) => {
  const [showError, setShowError] = useState({
    flag: false,
  });
  let title = useRef();
  let discription = useRef();
  let dueDate = useRef();

  //   function for handling the save button
  function handleOnSave() {
    let Title = title.current.value.trim();
    let Discription = discription.current.value.trim();
    let DueDate = dueDate.current.value;

    let message;

    if (Title === "") {
      setShowError({
        flag: true,
        message: "Plese Enter The Title !",
      });
    } else if (Discription === "") {
      setShowError({
        flag: true,
        message: "Plese Enter The Discription !",
      });
    } else if (DueDate === "") {
      setShowError({
        flag: true,
        message: "Plese Enter The DueDate !",
      });
    } else {
      onSave({
        Title,
        Discription,
        DueDate,
        Id: Math.floor(Math.random() * 10000),
        tasks: [],
      });

      // it will reset the value of input feild
      title.current.value = "";
      discription.current.value = " ";
      dueDate.current.value = " yyyy-MM-dd";
    }

    // if (Title !== "" && Discription !== " " && DueDate !== "") {
    // } else {
    //   setShowError(true);
    //   console.log("Validation Error");
    // }
  }

  // function for displaying the error modal

  // function for handling the onCLose
  function handleCloseError() {
    setShowError({
      flag: false,
    });
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
      {showError.flag && (
        <ErrorModel
          onClose={handleCloseError}
          title="Error !"
          message={showError.message}
        />
      )}
    </div>
  );
};

export default NewProject;
