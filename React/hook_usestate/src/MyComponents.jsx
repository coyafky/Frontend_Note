import React, { useState } from 'react';
function MyComponents() {
  const [name, SetName] = useState('Guest');
  const [age, SetAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    SetName('coya');
    // name ='coya';
    // console.log(name);
  };

  const incrementAge = () => {
    SetAge(age + 1);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name:{name}</p>
      <button onClick={updateName}>SetName</button>
      <p>Age:{age}</p>
      <button onClick={incrementAge}>add SetAge</button>
      <p>Is employed:{isEmployed ? 'Yes' : 'NO'}</p>
      <button onClick={toggleEmployedStatus}> Set Employed Status</button>
    </div>
  );
}

export default MyComponents;
