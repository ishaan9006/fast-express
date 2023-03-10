import React from "react";
import { motion } from "framer-motion"

type Props = {}

export default function Header({}: Props){
    return(
        <header className="sticky top-0 flex justify-between items-center max-w-7xl mx-auto z-50 py-3">
            <motion.div 
                initial={{x: -500, opacity:0, scale: 0.5}}
                animate={{x: 0, opacity:1, scale: 1}}
                transition={{duration:1.5}} 
                className="flex justify-center items-end"
            >
                <p className="text-4xl font-bold text-[#8096FB]">F</p>
                <p className="text-[#8096FB] text-xl font-extrabold px-1">Fast</p>
                <p className="text-sm font-semibold">Express</p>
            </motion.div>

            <motion.div 
                className="flex justify-around"
                initial={{y: -500, opacity:0, scale: 0.5}}
                animate={{y: 0, opacity:1, scale: 1}}
                transition={{duration:1.5}} 
            >
                <p className="cursor-pointer px-6 text-lg font-semibold">Company</p>
                <p className="cursor-pointer px-6 text-lg font-semibold">Our Services</p>
                <p className="cursor-pointer px-6 text-lg font-semibold">Business Solution</p>
                <p className="cursor-pointer px-6 text-lg font-semibold">Careers</p>
            </motion.div>  

            <motion.div 
                className="flex justify-center items-center"
                initial={{x: 500, opacity:0, scale: 0.5}}
                animate={{x: 0, opacity:1, scale: 1}}
                transition={{duration:1.5}} 
            >
                <p className="cursor-pointer px-4 text-lg font-semibold">Log in</p>
                <button className="bg-[#8096FB] p-3 rounded-lg text-white font-semibold">Register</button>
            </motion.div>
            
        </header>
    )
}