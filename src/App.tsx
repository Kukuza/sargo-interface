import DepositRequestCard from './components/cards/DepositRequestCard';
import DefaultButton from './components/Buttons/DefaultButton';
import InactiveButton from './components/Buttons/InactiveButton';
import "./components/Button/styles";
import AddWithdrawalButton from './components/Buttons/AddWithdrawalButton';
import SendButton from './components/Buttons/SendButton';
import ViewButton from './components/Buttons/ViewButton';

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
    
      <InactiveButton 
      text="Got It!"
      type="button"
      buttonStyle="disabled"
      handleClick={() => console.log("Clicked!")} onClick={function (): void {
        throw new Error('Function not implemented.');
      } } name={''} children={undefined} 
      />
      <AddWithdrawalButton
      text="Add/Withdrawal"
      type="button"
      buttonStyle="disabled"
      handleClick={() => console.log("Clicked!")} onClick={function (): void {
        throw new Error('Function not implemented.');
      } } name={''} children={undefined} 

      />
      <SendButton 

      text="Send"
      type="button"
      buttonStyle="disabled"
      handleClick={() => console.log("Clicked!")} onClick={function (): void {
        throw new Error('Function not implemented.');
      } } name={''} children={undefined} 

      />
      <ViewButton 

      text="View"
      type="button"
      buttonStyle="disabled"
      handleClick={() => console.log("Clicked!")} onClick={function (): void {
        throw new Error('Function not implemented.');
      } } name={''} children={undefined} 
      />
    
    </div>
    </div>
  );

}


export default App;
