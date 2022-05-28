import React from 'react';
import Home from './screens/Home/Home';

import Footer from './containers/Footer';
function App() {

  return (
    <div className="flex justify-center items-center p-[10px]">
      <ThankyouModal/>
      <Home />
      <Footer/>
    </div>

  );
}

export default App;
