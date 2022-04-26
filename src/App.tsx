import React from 'react';
import DepositRequestCard from './components/cards/DepositRequestCard';
import DefaultButton from './components/Buttons/DefaultButton';
import "./components/Button/styles";

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
          text="View"
          type="button"
          buttonStyle="outline"
          handleClick={() => console.log("Clicked!")} onClick={function (): void {
            throw new Error('Function not implemented.');
          } } name={''} children={undefined}      />
      <DefaultButton
          text="Got It!"
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
