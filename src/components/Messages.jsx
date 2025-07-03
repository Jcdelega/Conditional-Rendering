import { useEffect, useState } from "react";
const Messages=({text})=>{
    const [message, setMessage]=useState(text);
    const handlerEffect=()=>{
        setMessage(text);
    };
    useEffect(handlerEffect,[text]);
    return(
        <div className="">
            <p>{message}</p>
        </div>
    );
}
export default Messages;