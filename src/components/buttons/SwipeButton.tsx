import React, {useState} from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { COLORS } from '../../styles/colors/colors';
import { useGestureResponder} from 'react-gesture-responder';
import { useSpring, animated } from 'react-spring';


const SwipeButton = (props: any) =>  {
    const [success, setSuccess] = useState(false);         
    const [{x}, set ] = useSpring(() => {
        return {x:0}
    })
    const handleComplete = () => {
        props.onSuccess();
    }
    const textPosition = x.interpolate({
        map:(x:any) => {
            const xa = Math.abs(x)
            return addResistance(xa + 20)
        },
        range: [0, 300],
        output:['translateX(-10px)', 'translateX(200px)'],
        extrapolate:'clamp',
    })

    const {bind} = useGestureResponder({
        onStartShouldSet: () => true,
        onMove:({delta, xy }) => {
            const succ = shouldSucceed(delta[0])
            if(succ !== success) {
                setSuccess(true)
            }
            set({x:delta[0], immediate:true})
        },
        onRelease: ({delta}) => {
            if(shouldSucceed(delta[0])) {
                handleComplete();
            }
        set({ x:0 , immediate:true})
        }
    })
    const styles = {
        button:`buttonGradient w-[286px] h-[56px] rounded-full flex justify-start items-center m-[10px] p-[10px]`,
        circle:`z-20 bg-white w-[39px] h-[39px] rounded-full flex justify-center items-center p-[5px] cursor-grab active:cursor-grabbing`,
        text:`ml-[20px] text-white select-none`,
        container:`overflow-hidden mx-[10px] z-0 w-[80%] rounded-full`,
    }
    function shouldSucceed (x:any) {
        return x > 150 
    }
    function addResistance ( x: any) {
        const absX = Math.abs(x)
        if (absX > 150) {
            return x + (absX - 150) * 0.6 * (x < 0 ? 1 : -1)
        }
        return x
    }
  return (
    <animated.div>
    <div className={styles.button}>
    <animated.div {...bind} className={styles.circle} style={{
      cursor:`-webkit-grab`,
      transform:x.interpolate(x => {
          return `translateX(${addResistance(x)}px)`
      }),
    }}>
        <AiOutlineArrowRight size={24} color={COLORS.textDarkBlue}/>
    </animated.div>
    <div  className={styles.container}>
    <animated.div style={{
        transform: textPosition
    }}>
    <h4 className={styles.text}>
      Swipe To Confirm
    </h4>
    </animated.div>
    </div>
    </div>
    </animated.div>
    
  )
}

export default SwipeButton