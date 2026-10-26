import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const [task, settask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, description });

    settask(copyTask);

    settitle("");
    setdescription("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    settask(copyTask);
  };

  return (
    <div className="h-screen lg:flex bg-black color-white text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex p-10 items-center flex-col gap-5 lg:w-1/3"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>

        {/* First input for heading */}
        <input
          type="text"
          placeholder="Enter Task Heading"
          className="px-5 py-2 border-2 rounded w-full outline-none"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        {/* Detailed input for description */}
        <textarea
          type="text"
          className="px-5 h-40 py-2 border-2 rounded outline-none w-full"
          placeholder="Enter Details"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />

        <button className="bg-white text-black px-5 py-2 rounded outline-none w-full active:bg-gray-500">
          Add Notes
        </button>

        <img
          className="h-80 rotate-y-180"
          src="https://static.vecteezy.com/system/resources/previews/049/655/129/non_2x/a-man-writing-on-a-desk-with-a-pen-and-paper-png.png"
          alt=""
        />
      </form>

      <div className="p-10 lg:w-2/3 lg:border-l">
        <h1 className="text-xl font-bold ">Your Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-auto overflow-auto items-start justify-start">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="relative h-52 w-40 bg-white text-black p-4"
              >
                <h3 className="leading-tight text-base font-bold truncate">
                  {elem.title}
                </h3>
                <h2
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="absolute top-1 right-1 p-1 cursor-pointer active:bg-gray-500"
                >
                  <X />
                </h2>
                <p className="mt-2 text-xs leading-tight font-medium text-gray-700 overflow-hidden">
                  {elem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
