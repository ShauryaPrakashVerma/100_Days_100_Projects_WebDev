import React from "react";

const App = () => {
  const submitHandler = (elem) => {
    elem.preventDefault();   // prevents default behaviour of reloading of the form on clicking Submit
    console.log("Form Submitted");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter you name" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
