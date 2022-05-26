import React from 'react';
import ThankyouModal from './components/modals/ThankyouModal';
import Footer from './containers/Footer';

function App() {

  return (
    <div className="flex justify-center items-center p-[10px]">
      <ThankyouModal/>
      <Footer/>
    </div>

  );
}

export default App;
