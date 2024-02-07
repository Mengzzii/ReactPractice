import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      <h3>
        Your name is {name.firstName} {name.lastName}
      </h3>
      <form>
        First Name:
        <br />
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <br />
        Last Name:
        <br />
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
}
