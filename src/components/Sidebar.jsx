import React from "react";

const Sidebar = ({ listItem, onClick, OnSelectProject, selectedProjectId }) => {
  return (
    <aside className=" text-white bg-black h-screen w-[22rem] rounded-r-xl  mt-16  pl-10     ">
      <h2 className=" text-xl  font-bold  p-5 uppercase tracking-wide  ">
        Your Projects
      </h2>
      <div className=" ml-3 ">
        <button
          className="  h-[2.8rem] w-[8rem] rounded-lg  text-neutral-400 font-medium   m-2 p-1 bg-stone-600 hover:shadow-lg hover:bg-stone-700 hover:font-bold     "
          onClick={onClick}
        >
          + Add Projects
        </button>
      </div>

      <ul className=" flex flex-col   font-medium space-y-1 list-inside mt-14  text-stone-400     ">
        {listItem.map((item) => {
          let CssClass =
            " w-[9rem] h-[2rem]  text-center  hover:bg-stone-800 hover:rounded-sm  hover:cursor-pointer hover:text-stone-200   ";

          if (item.Id === selectedProjectId) {
            CssClass += " bg-stone-800 text-stone-200 ";
          } else {
            CssClass += " text-stone-400 ";
          }

          return (
            <li className={CssClass} key={item.Id}>
              <button onClick={() => OnSelectProject(item.Id)}>
                {item.Title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
