import React from 'react';
import ThankyouModal from './components/modals/ThankyouModal';
import WithdrawRequestScreen from './screens/withdrawals/WithdrawRequestScren';
function App() {
  return (
    <div className="flex justify-center items-center p-[10px]">
      <ThankyouModal/>
      <WithdrawRequestScreen />
    </div>
  );
}

export default App;
