// React Import
import { useEffect, useRef } from 'react';

// Library Imports
import { motion, useAnimation, useInView } from '../imports/Library';

// Default Funtion
export default function BoxThemeProvider({ children, className }) {
    // Check if element is in view
    const boxThemeRef = useRef(null);
    const isBoxThemeInView = useInView(boxThemeRef, {once:true}); // Runs just once on mount
    const mainControl = useAnimation();

    useEffect(()=>{
        if(isBoxThemeInView){
            mainControl.start("visible");
        }
    },[isBoxThemeInView, mainControl])

    return (
        <motion.div 
            className={'p-4 rounded-2xl shadow relative bg-gradient-dark w-full h-fit '+className}
            ref={boxThemeRef}
            variants={
                {
                    hidden: { opacity:0, x:-150 },
                    visible: { opacity:1, x:0 }
                }
            }
            initial="hidden"
            whileHover={{ scale: 1.01 }}
            animate={mainControl}
            transition={{ duration:0.5 }}
        >
            { children }
        </motion.div>
    )
}
