import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/userSlice";

function Home() {
  const dispatch = useDispatch();
  const [inputForm, setFormInput] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  });

  const handleState = (event) => {
    const { name, value } = event.target;

    setFormInput((currValue) => {
      return { ...currValue, [name]: value };
    });
  };

  const AddUser = (event) => {
    event.preventDefault(); 
    dispatch(setUser(inputForm));
  };

  console.log(inputForm);

  return (
    <div>
      <form>
        <label>Name</label>
        <br />
        <input
          name="name"
          type="text"
          value={inputForm.name}
          onChange={handleState}
        />

        <br />
        <label>Age</label>
        <br />
        <input
          name="age"
          type="number"
          value={inputForm.age}
          onChange={handleState}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          name="email"
          type="text"
          value={inputForm.email}
          onChange={handleState}
        />
        <br />

        <label>Contact</label>
        <br />
        <input
          name="contact"
          type="number"
          value={inputForm.contact}
          onChange={handleState}
        />
        <br />
        <button onClick={AddUser}>Add</button>
      </form>
    </div>
  );
}

export default Home;
