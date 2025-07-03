import { useState } from "react";
import Messages from "./Messages";

const InputNumber=({randomNumber})=>{
    const [input, setInput]=useState('');
    const [aux, setAux]=useState(0);
    
    const handleButton=()=>{
        setAux(parseInt(input));
    }

    return(
        <>
        <div>
            <input type='number' value={input} placeholder="Type a number" onChange={e=>setInput(e.target.value)} max={1}/>
            <button onClick={handleButton}>Guess match</button>
            {
                aux === randomNumber ? 
                    (<Messages text={`Congrats you guessed my number ${randomNumber}`}/>):
                        aux < randomNumber? (<Messages text={`Your number is lower`}/> ):
                            (<Messages text={`Your number is greater`} />)
            }
            <div>
                <i className={`bi bi-dice-${aux}`}> Your dice</i>
            </div>
        </div>
        </>
    );
};

export default InputNumber;