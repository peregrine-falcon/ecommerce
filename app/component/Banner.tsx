"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";

const Banner = () => {
    const [displayTextIndex, setDisplayTextIndex] = useState(0);
    const displayTexts = ["Get 10% off on business sign up", "Advertise your message here", "This is developed by Raghav Sharma"];

    const handleClickLeft = () => {
        const newIndex = (displayTextIndex - 1 + displayTexts.length) % displayTexts.length;
        setDisplayTextIndex(newIndex);
    };

    const handleClickRight = () => {
        const newIndex = (displayTextIndex + 1) % displayTexts.length;
        setDisplayTextIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleClickRight();
        }, 2000);

        return () => clearInterval(interval);
    }, [displayTextIndex]);

    return (
        <div className="bg-[#F4F4F4] p-2 flex gap-5 items-center justify-center">
            <button onClick={handleClickLeft}><Image src="/png/left.png" alt="left-icon" width={7} height={12} /></button>
            <h2 className="text-black font-medium text-sm text-center">{displayTexts[displayTextIndex]}</h2>
            <button onClick={handleClickRight}><Image src="/png/right.png" alt="right-icon" width={7} height={12} /></button>
        </div>
    )
}

export default Banner;
