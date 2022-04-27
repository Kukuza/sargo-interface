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
const roundedButtonClassNames =
  "bg-gradient-to-br from-bluish to-pinkish  text-white font-bold py-2 px-4 rounded-full"

  return (
    <div className="p-1 font-bold bg-gradient-to-br from-bluish to-pinkish buttonGradient text-white py-2 px-4 rounded-full h-[56px] w-[286px] buttonText">
      <button
        p-1={
            buttonStyle === "rounded"
          ? roundedButtonClassNames
          : null
        }
        
      >
        {text}
      </button>
    </div>
  )};

export default Button;