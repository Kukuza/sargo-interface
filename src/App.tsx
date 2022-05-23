import React from 'react';
import ThankyouModal from './components/modals/ThankyouModal';
import NavHeader from './containers/NavHeader';
function App() {
  return (
    <div className="flex justify-center items-center p-[10px]">
      <NavHeader />
      <ThankyouModal/>
    </div>
  );
}

export default App;
