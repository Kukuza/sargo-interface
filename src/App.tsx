import React from 'react';
import Keypad from './components/buttons/Keypad';
function App() {
  return (
    <div className="flex justify-center items-center p-[10px]">
      <Keypad onChange={() => null }/>
    </div>
  );
}

export default App;
