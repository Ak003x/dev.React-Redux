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
        <input type="text" value={inputForm.name} />
        <br />
        <label>Contact</label>
        <br />
        <input type="number" value={inputForm.contact} />
        <br />
        <label>Age</label>
        <br />
        <input type="number" value={inputForm.age} />
        <br />
        <label>Email</label>
        <br />
        <input type="text" value={inputForm.email} />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Home;
