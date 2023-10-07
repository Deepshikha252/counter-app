"use client"
import React, {useState} from "react";
import "./style.css";


const Counter = () => {
    const [myNum, setMyNum] = useState(2);
    const [cusNum, cusMyNum] = useState(0);
    const handleCustomCounterIncr = () => {
        if (cusNum > 0) {
            setMyNum(cusNum  + myNum)
        } else {
            setMyNum(myNum + 1)
        }
    };
    const handleCustomCounterDecr = () => {
        if (cusNum > 0) {
            myNum > 0 ? setMyNum(myNum - cusNum) : setMyNum(0);
        } else {
            myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0);
        }

    }
    return (
        <div className="center_div">
            <p>{myNum}</p>
            <div className="button2" onClick={() => handleCustomCounterIncr()}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Increase
            </div>
            <div
                className="button2"
                onClick={() => handleCustomCounterDecr()}
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Decrease
            </div>
            <div>
                <input type="number" onChange={(event) => cusMyNum(Number(event.target.value))}/>
            </div>
        </div>
    );
};
export default Counter;