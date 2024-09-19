import React from 'react';
import GreetingObject from './GreetingObejct';
import PropsAndState from './PropsAndState';
import State from './State';
import StateAsProps from './StateAsProps';
import StateExample from './Stateexample';
import Page from './StatePrivate/page';
const Welcome = ({ text }) => {
  return <h1>{text}</h1>;
};

const App = () => {
  const greeting = 'Welcome to React';
  const greetingObject = { greeting: 'Welcome to React' };

  return (
    <div>
      <Welcome text={greeting} />
      <GreetingObject text={greetingObject.greeting} />
      <PropsAndState />
      <State />
      <StateAsProps />
      <StateExample />
      <Page/>
    </div>
  );
};

export default App;
