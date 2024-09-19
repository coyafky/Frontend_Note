import { useState } from 'react';

function StateAsProps() {
  const [greeting, setGreeting] = useState('welcome to the React');
  const [isShow, setIsShow] = useState(true);

  const handleToggle = () => {
    setIsShow(!isShow);
  };

  const handleChange = (event) => {
    setGreeting(event.target.value);
  };

  return (
    <div>
      <button onClick={handleToggle} type="button">
        Toggle
      </button>
      <input type="text" value={greeting} onChange={handleChange} />
      {isShow ? <Welcome text={greeting}></Welcome> : null}
    </div>
  );
}
const Welcome = ({ text }) => {
  return <h1>{text}</h1>;
};

export default StateAsProps;
