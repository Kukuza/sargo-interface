import React, {useState} from 'react';
import { CircularProgressbarWithChildren,  buildStyles } from 'react-circular-progressbar';
import { AiOutlineArrowRight } from "react-icons/ai";
import { COLORS } from '../../styles/colors/colors';

import 'react-circular-progressbar/dist/styles.css';

function CircularProgress() {
    const [progress, setProgress] = useState(0)
    const [value, setValue] = useState(0)
    function buttonClicked(){
        if(value <= 3){
            setValue(value + 1)
            setProgress(progress + 25)
            if(value === 3){
                alert("Done")
            }
        }else {
            setValue(0);
            setProgress(0);
        }
       

    }
  return (
      <div className='w-[55px] h-[55px] flex justify-center items-center'>
        <CircularProgressbarWithChildren 
        value={progress}
        strokeWidth={5}
        styles={buildStyles({
            pathTransitionDuration: 0.35,
            pathColor: `${COLORS.textColor4}`,
            trailColor: `${COLORS.white}`,
            backgroundColor: `${COLORS.white}`,
          })}
        >
            <div 
            onClick={buttonClicked}
            className='onboardGradient w-[40px] h-[40px] rounded-full flex justify-center items-center p-[5px]'>
            <AiOutlineArrowRight size={24} color={COLORS.white}/>
            </div>
        </CircularProgressbarWithChildren>
        </div>
  )
}

export default CircularProgress