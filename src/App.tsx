import React from 'react';
import SwipeButton from './components/buttons/SwipeButton';
function App() {
  function onSucess (){
    alert("Sucess")
  }
  return (
    <div className="flex justify-center items-center p-[10px]">
      <SwipeButton onSuccess={onSucess}/>
    </div>
  );
}

export default App;
