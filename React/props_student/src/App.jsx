import Student from './Student';

function App() {
  return (
    <>
      <Student name="coya" age={30} isStudent={true} />
      <Student name="coco" age={22} isStudent={false} />

      <Student name="lary" />
    </>
  );
}

export default App;
