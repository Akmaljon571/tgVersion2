import {  createContext, useState } from "react"; 
import data from "../data/data";
import useTil from "../useTil/UseTil";


export const RenderId = createContext();
export const RenderP = ({ children }) =>{
     const [id1, setid1] = useState(JSON.parse(localStorage.getItem('id1')) || []);
     const [id2, setid2] = useState(JSON.parse(localStorage.getItem('id2')) || []);
     const [id3, setid3] = useState(JSON.parse(localStorage.getItem('id3')) || []);
     const [id4, setid4] = useState(JSON.parse(localStorage.getItem('id4')) || []);
     const [id5, setid5] = useState(JSON.parse(localStorage.getItem('id5')) || []);
     const [id6, setid6] = useState(JSON.parse(localStorage.getItem('id6')) || []);
     const [id7, setid7] = useState(JSON.parse(localStorage.getItem('id7')) || []);
     const [id8, setid8] = useState(JSON.parse(localStorage.getItem('id8')) || []);
     const [id9, setid9] = useState(JSON.parse(localStorage.getItem('id9')) || []);
     const [id10, setid10] = useState(JSON.parse(localStorage.getItem('id10')) || []);
 

     
     const value = {
        id1, 
        setid1,
        id2, 
        setid2,
        id3, 
        setid3,
        id4, 
        setid4,
        id5, 
        setid5,
        id6, 
        setid6,
        id7, 
        setid7,
        id8, 
        setid8,
        id9, 
        setid9,
        id10, 
        setid10,
     }

    return (
        <RenderId.Provider value = {value}>{children}</RenderId.Provider>
    )
}