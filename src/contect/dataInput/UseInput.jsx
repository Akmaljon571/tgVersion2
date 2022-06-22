import { useContext } from "react";
import { RenderId } from "./dataInput";

function UseInput() {
    const { id1, setid1, id2, setid2, id3, setid3, id4, setid4, id5, setid5, id6, setid6, id7,  setid7, id8,  setid8, id9,  setid9,id10, setid10} = useContext(RenderId)
    return {
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
    };
}

export default UseInput;

