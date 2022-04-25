import React from 'react';
import DepositRequestCard from './components/cards/DepositRequestCard';
import DefaultButton from './components/Buttons/DefaultButton';
function App() {
  return (
    <div>
      <DepositRequestCard/>
      <div className="flex items-center justify-center h-screen">
      <DefaultButton
          text="Review"
          type="button"
          buttonStyle="rounded"
          handleClick={() => console.log("Clicked!")} onClick={function (): void {
            throw new Error('Function not implemented.');
          } } name={''} children={undefined}      />
      <DefaultButton
          text="Outline Button"
          type="button"
          buttonStyle="outline"
          handleClick={() => console.log("Clicked!")} onClick={function (): void {
            throw new Error('Function not implemented.');
          } } name={''} children={undefined}      />
      <DefaultButton
          text="Disabled Button"
          type="button"
          buttonStyle="disabled"
          handleClick={() => console.log("Clicked!")} onClick={function (): void {
            throw new Error('Function not implemented.');
          } } name={''} children={undefined}      />
    </div>
    </div>
  );

}


export default App;
