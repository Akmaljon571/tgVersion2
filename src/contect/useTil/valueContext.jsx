import { createContext } from "react";
import { useState } from "react";


export const ValueContext = createContext();

export const ValueProvide = ({ children }) => {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem('til'))||'uz');
    const [id, setId] = useState(1);
    const [bildirish, setBildirish] = useState(true);
    const data = {
        value,
        setValue,
        id,
        setId,
        bildirish,
        setBildirish,
    }

    return(
        <ValueContext.Provider value={data}>{ children }</ValueContext.Provider>
    )
}