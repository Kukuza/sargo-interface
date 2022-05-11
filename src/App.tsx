import React from 'react';
import Copy from './components/buttons/Copy';
import SendButton from './components/buttons/SendButton';
import WithdrawButton from './components/buttons/WithdrawButton';
import CancelModal from './components/modals/CancelModal';


function App() {

  return (
    <div className="flex justify-center items-center p-[10px]">
      <SendButton/>
      <WithdrawButton/>
      <Copy/>
      <CancelModal/>
    </div>
  );
}

export default App;
