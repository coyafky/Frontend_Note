import BasicEvent from './BasicEvent';
import InlineHander from './InlineHander';
import CallbackEventHandle from './CallbackEventHandle';
import EventPropagation from './EventPropagation';
import StoppingPropagation from './Stoppingpropagation';
import CatchEvent from './CatchEvent';
import Signup from './PreventDefault';
function App() {
  return (
    <>
      <BasicEvent />
      <InlineHander />
      <CallbackEventHandle/>
      <EventPropagation/>
      <StoppingPropagation/>
      <CatchEvent/>
      <Signup/>

      
    </>
  );
}

export default App;
