import React from "react";
import { forwardRef } from "react";

const Inputs = forwardRef(({ label, textarea, ...props }, ref) => {
  return (
    <p className=" flex flex-col  m-4 uppercase  ">
      <label className=" font-semibold text-lg mb-3  ">{label}</label>
      {textarea ? (
        <textarea
          {...props}
          className="rounded-md p-2 outline-none  bg-stone-200 "
          ref={ref}
        ></textarea>
      ) : (
        <input
          {...props}
          className=" h-[2.5rem] p-2 w-[30rem] rounded-md outline-none bg-stone-200   "
          ref={ref}
        />
      )}
    </p>
  );
});

export default Inputs;
