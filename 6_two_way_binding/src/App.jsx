import React, { useState } from "react";


// Two-way binding refers to a bidirectional flow of data between the user interface (UI) and the application state. In this system, when a user interacts with an input element, the corresponding state is updated, and any changes in the state are immediately reflected in the UI


const App = () => {
  const [title, setTitle] = useState("");

  const submitHandler = (elem) => {
    elem.preventDefault(); // prevents default behaviour of reloading of the form on clicking Submit
    console.log("Form Submitted by ", title);
    setTitle('')
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter you name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
