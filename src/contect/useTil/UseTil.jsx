import { ValueContext } from '../useTil/valueContext';
import { useContext } from "react";

function useTil() {
    const {value, setValue, id, setId, bildirish, setBildirish, footer,setFooter} = useContext(ValueContext)
    return {
      value,
      setValue,
      id,
      setId,
      bildirish, 
      setBildirish,
      footer,
      setFooter,
    };
}

export default useTil;