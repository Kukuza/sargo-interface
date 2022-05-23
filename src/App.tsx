import React from 'react';
import ThankyouModal from './components/modals/ThankyouModal';
import Home from './screens/Home/Home';
function App() {
  return (
    <div className="flex justify-center items-center p-[10px]">
      <ThankyouModal/>
      <Home />
    </div>
  );
}

export default App;
