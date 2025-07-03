import { useState, useCallback } from "react";
import Messages from "./Messages";
import InputNumber from "./InputNumber";

const Game=()=>{
    const [randomNumber, SetRandomNumber]=useState(null);  

    const secureRandomInt = useCallback((min=0, max=10) =>{
        const range = max - min + 1;
        const array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return min + (array[0] % range);
    },[]);

    const getFairRandomNumber=()=>{
        SetRandomNumber(secureRandomInt());
    };
    console.log(`Number: ${randomNumber} `);
    return(
        <section className="container d-flex">
            <h1>Guess the number!</h1>
            <h2>Fair play</h2>
            {
                !randomNumber?(<Messages text={`Let's start click the button to play`}/>):
                (<>
                <p className="">My number is:</p>
                <p><strong>Secret</strong></p></>)
            }
            <button onClick={getFairRandomNumber}>Throw the dice to get a random number </button>
            <InputNumber randomNumber={randomNumber}/>
        </section>
    );
};
export default Game;