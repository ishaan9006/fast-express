import React from "react";

type Props = {}

export default function Header({}: Props){
    return(
        <header className="sticky top-0 flex justify-between items-center max-w-7xl mx-auto z-50 py-3">
            <div className="flex justify-center items-end">
                <p className="text-4xl font-bold text-[#8096FB]">F</p>
                <p className="text-[#8096FB] text-xl font-extrabold px-1">Fast</p>
                <p className="text-sm font-semibold">Express</p>
            </div>
            <div className="flex justify-around">
                <p className="cursor-pointer px-6 text-lg font-semibold">Company</p>
                <p className="cursor-pointer px-6 text-lg font-semibold">Our Services</p>
                <p className="cursor-pointer px-6 text-lg font-semibold">Business Solution</p>
                <p className="cursor-pointer px-6 text-lg font-semibold">Careers</p>
            </div>  

            <div className="flex justify-center items-center">
                <p className="cursor-pointer px-4 text-lg font-semibold">Log in</p>
                <button className="bg-[#8096FB] p-3 rounded-lg text-white font-semibold">Register</button>
            </div>
            
        </header>
    )
}