import Profile from './Profile';
import Displaydata from './displaydata';
import Mybutton from './Mybutton';
function App() {
  return (
    <>
      <article>
        <h1>My First Component</h1>
        <ol>
          <li>Components: UI Building Blocks</li>
          <li>Defining a Component</li>
          <li>Using a Component</li>
        </ol>
      </article>
      <h1>Amazing scientists</h1>
      
      <Profile />
      <Profile />
      <Profile />
      <Profile />

      <Displaydata/>

      <Mybutton/>
    </>
  );
}

export default App;
