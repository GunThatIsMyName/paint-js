// import Eleven from './day11';
import Day13 from './day13';
import DayProvider from './day13/DayContext';

function App() {
  return (
    // <Eleven/>
    <DayProvider>
      <Day13 />
    </DayProvider>
  );
}

export default App;
