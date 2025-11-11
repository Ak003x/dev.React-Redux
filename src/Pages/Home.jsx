import React from "react";

function Home() {
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
