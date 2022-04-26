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

const outlineButtonClassNames =
  "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"

const disabledButtonClassNames =
  "bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
  return (
    <div className="p-1 bg-gradient-to-br from-bluish to-pinkish  text-white font-bold py-2 px-4 rounded-full h-[56px] w-[286px]">
      <button
        p-1={
            buttonStyle === "rounded"
          ? roundedButtonClassNames
          : buttonStyle === "outline"
          ? outlineButtonClassNames
          : buttonStyle === "disabled"
          ? disabledButtonClassNames
          : null
        }
        
      >
        {text}
      </button>
    </div>
  )};

export default Button;