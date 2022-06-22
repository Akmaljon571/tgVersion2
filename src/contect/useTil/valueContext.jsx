import { createContext } from "react";
import { useState, useEffect } from "react";
import prof from '../img/save.jpg'


export const ValueContext = createContext();

export const ValueProvide = ({ children }) => {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem('til'))||'uz');
    const [id, setId] = useState(false);
    const [bildirish, setBildirish] = useState([{
        img: prof,
        id: 1,
        fname: 'Muslim_571',
        padpiska: "online",
        bio:"𝑺𝒊𝒛𝒏𝒊 𝒔𝒐𝒈'𝒊𝒏𝒅𝒊𝒌 𝒚𝒐 🅡🅐🅢🅤🅛🅛🅤🅛🅞🅗",
        silka: '@Rasulim571sav',
        yol: {
            tuzilish: 'lichka',
            foto: 17,
            video: 8,
            fayl: 6,
            audio: 6,
            silka: 13,
            gif: '',
        }
    },]);
    const [bool, setBool] = useState('');
    const [bool1, setBool1] = useState(false);
    const [check, setCheck] = useState(false);
    const [footer, setFooter] = useState([])
    const [kor, setKor] = useState([]);
    const data = {
        value,
        setValue,
        id,
        setId,
        bildirish,
        setBildirish,
        footer,
        setFooter,
        check,
        setCheck,
        kor, 
        setKor,
        bool,
        setBool,
        bool1,
        setBool1,
    }

    return(
        <ValueContext.Provider value={data}>{ children }</ValueContext.Provider>
    )
}