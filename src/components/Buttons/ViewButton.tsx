import React from "react";

type ButtonProps = {
  onClick(): void;
  name: string;
  children: React.ReactNode;
  text: string;
   type: string;
    buttonStyle: string;
     handleClick: () => void; }



const Button: React.FunctionComponent<ButtonProps> = ({ buttonStyle, type, text, onClick }) => {

const outlineButtonClassNames =
  "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-blue-500 hover:border-transparent rounded-full"

  return (
    <div className="p-1 bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white font-bold py-2 px-4 border border-bl hover:border-transparent rounded-full h-[56px] w-[286px] buttonText">
      <button
        p-1={
           
            buttonStyle === "outline"
          ? outlineButtonClassNames
          
          : null
        }
        
      >
        {text}
      </button>
    </div>
  )};

export default Button;