import React, { useState } from "react";

function Home() {
  const [inputForm, setFormInput] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  });

  return (
    <div>
      <form>
        <label>Name</label>
        <br />
        <input type="text" />
        <br />
        <label>Contact</label>
        <br />
        <input type="number" />
        <br />
        <label>Age</label>
        <br />
        <input type="number" />
        <br />
        <label>Email</label>
        <br />
        <input type="text" />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Home;
