import { ValueContext } from '../useTil/valueContext';
import { useContext } from "react";

function useTil() {
    const {value, setValue, id, setId, bildirish, setBildirish, footer,setFooter, setCheck, check, kor, setKor, bool, setBool,bool1, setBool1} = useContext(ValueContext)
    return {
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
    };
}

export default useTil;