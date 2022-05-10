import React, {useEffect, useState} from 'react';
import { FiDelete } from "react-icons/fi";

function Keypad(props: any) {
    const [value, setValue] = useState("");

    const handleChange = (text: string) => {
      if (value === "" && text === "0") {
        return null;
      }
      setValue(value + text);
    };  
  
    const handleDelete = () => {
      setValue(value.slice(0, -1));
    };
  
    useEffect(() => {
      props.onChange(value);
    }, [value]);
  return (
    <div className='screenGradient w-[375px] h-[812px] flex justify-center items-center p-[10px] flex-col'>
        <div className='w-[80%] flex flex-wrap justify-center items-center'>
        <div onClick={() => handleChange("1")} className='mx-[20px] my-[10px] flex justify-center items-center h-[50px] w-[50px] rounded-2xl keypadColor hover:keypadColorHover cursor-pointer'>
            <h4 className='text-textColor3'>1</h4>
        </div>  
        <div onClick={() => handleChange("2")} className='mx-[20px] my-[10px] flex justify-center items-center h-[50px] w-[50px] rounded-2xl keypadColor hover:keypadColorHover cursor-pointer'>
            <h4 className='text-textColor3'>2</h4>
        </div>    
        <div onClick={() => handleChange("3")} className='mx-[20px] my-[10px] flex justify-center items-center h-[50px] w-[50px] rounded-2xl keypadColor hover:keypadColorHover cursor-pointer'>
            <h4 className='text-textColor3'>3</h4>
        </div>    
        <div onClick={() => handleChange("4")} className='mx-[20px] my-[10px] flex justify-center items-center h-[50px] w-[50px] rounded-2xl keypadColor hover:keypadColorHover cursor-pointer'>
            <h4 className='text-textColor3'>4</h4>
        </div>    
        <div onClick={() => handleChange("5")} className='mx-[20px] my-[10px] flex justify-center items-center h-[50px] w-[50px] rounded-2xl keypadColor hover:keypadColorHover cursor-pointer'>
            <h4 className='text-textColor3'>5</h4>
        </div>    
        <div onClick={() => handleChange("6")} className='mx-[20px] my-[10px] flex justify-center items-center h-[50px] w-[50px] rounded-2xl keypadColor hover:keypadColorHover cursor-pointer'>
            <h4 className='text-textColor3'>6</h4>
        </div>    
        <div onClick={() => handleChange("7")} className='mx-[20px] my-[10px] flex justify-center items-center h-[50px] w-[50px] rounded-2xl keypadColor hover:keypadColorHover cursor-pointer'>
            <h4 className='text-textColor3'>7</h4>
        </div>    
        <div onClick={() => handleChange("8")} className='mx-[20px] my-[10px] flex justify-center items-center h-[50px] w-[50px] rounded-2xl keypadColor hover:keypadColorHover cursor-pointer'>
            <h4 className='text-textColor3'>8</h4>
        </div>    
        <div onClick={() => handleChange("9")} className='mx-[20px] my-[10px] flex justify-center items-center h-[50px] w-[50px] rounded-2xl keypadColor hover:keypadColorHover cursor-pointer'>
            <h4 className='text-textColor3'>9</h4>
        </div> 
        <div onClick={() => handleChange(".")} className='mx-[20px] my-[10px] flex justify-center items-center h-[50px] w-[50px] rounded-2xl keypadColor hover:keypadColorHover cursor-pointer'>
            <h4 className='text-textColor3'>.</h4>
        </div> 
        <div onClick={() => handleChange("0")} className='mx-[20px] my-[10px] flex justify-center items-center h-[50px] w-[50px] rounded-2xl keypadColor hover:keypadColorHover cursor-pointer'>
            <h4 className='text-textColor3'>0</h4>
        </div>   
        <div onClick={() => handleDelete()} className='mx-[20px] my-[10px] flex justify-center items-center h-[50px] w-[50px] rounded-2xl keypadColor hover:keypadColorHover cursor-pointer'>
            <h4 className='text-textColor3'><FiDelete/></h4>
        </div>             
        </div>
        <div onClick={() => alert(value)} className='mt-[30px]'>
        </div>
    </div>
  )
}

export default Keypad