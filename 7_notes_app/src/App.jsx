import React from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="h-screen lg:flex bg-black color-white text-white">
      <form onSubmit={(e)=>{
          submitHandler(e);
        }}
        className="flex p-10 items-center flex-col gap-5 lg:w-1/3"
      >
      <h1 className="text-3xl font-bold">Add Notes</h1>

          <input
            type="text"
            placeholder="Enter Task Heading"
            className="px-5 py-2 border-2 rounded w-full outline-none"
          />

          <textarea
            type="text"
            className="px-5 h-40 py-2 border-2 rounded outline-none w-full"
            placeholder="Enter Details"
          />

          <button className="bg-white text-black px-5 py-2 rounded outline-none w-full">
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
        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          <div className="h-62 w-50 rounded-2xl bg-white"></div>
          <div className="h-62 w-50 rounded-2xl bg-white"></div>
          <div className="h-62 w-50 rounded-2xl bg-white"></div>
          <div className="h-62 w-50 rounded-2xl bg-white"></div>
        </div>
        

      </div>
    </div>
  );
};

export default App;
