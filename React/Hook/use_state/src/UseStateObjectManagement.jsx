import { useState } from 'react';

function UseStateObjectManagement() {
  const [person, setPerson] = useState({ name: 'nawei', age: 40 });
  const nameChangeHandler = (event) => {
    setPerson({ ...person, name: event.target.value });
  };
  const ageChangeHandler = (event) => {
    setPerson({ ...person, age: event.target.value });
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={person.name}
          onChange={nameChangeHandler}
          placeholder="Name"
        />
        <input
          type="number"
          value={person.age}
          onChange={ageChangeHandler}
          placeholder="Age"
        />
        <div>
          <strong>Person Object:</strong> {JSON.stringify(person)}
        </div>
      </div>
    </>
  );
}

export default UseStateObjectManagement;
