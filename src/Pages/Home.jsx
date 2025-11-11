import React, { useState } from "react";

function Home() {
  const [inputForm, setFormInput] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  });

  
  const handleState = (event) => {

  };

  return (
    <div>
      <form>
        <label>Name</label>
        <br />
        <input type="text" value={inputForm.name} onChange={handleState} />
        <br />
        <label>Contact</label>
        <br />
        <input type="number" value={inputForm.contact} onChange={handleState} />
        <br />
        <label>Age</label>
        <br />
        <input type="number" value={inputForm.age} onChange={handleState}/>
        <br />
        <label>Email</label>
        <br />
        <input type="text" value={inputForm.email} onChange={handleState} />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Home;
