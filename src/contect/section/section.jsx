import DataInput from '../dataInput/dataInput'
import UseInput from '../dataInput/UseInput';
import UseTil from '../useTil/UseTil';
import { useEffect, useState } from 'react';
import './section.scss'
import ModalImage from '../modal/modal';

function section() {
    const { id1, id2, id3, id4, id5, id6, id7, id8, id9, id10  } = UseInput()
    const { bildirish, check, setCheck, id, setId, kor, setKor, bool } = UseTil()
    let Map = []

    const objId = bildirish.map((item) => item.id)
    const newId1 = id1.map((item) => item.key1)
    const newId2 = id2.map((item) => item.key1)
    const newId3 = id3.map((item) => item.key1)
    const newId4 = id4.map((item) => item.key1)
    const newId5 = id5.map((item) => item.key1)
    const newId6 = id6.map((item) => item.key1)
    const newId7 = id7.map((item) => item.key1)
    const newId8 = id8.map((item) => item.key1)
    const newId9 = id9.map((item) => item.key1)
    const newId10 = id10.map((item) => item.key1)
    if (objId == newId1[1] ) {
        Map = id1
    } else if (objId == newId2[1]) {
        Map = id2
    } else if (objId == newId3[1]) {
        Map = id3
    } else if (objId == newId4[1]) {
        Map = id4
    } else if (objId == newId5[1]) {
        Map = id5
    } else if (objId == newId6[1]) {
        Map = id6
    } else if (objId == newId7[1]) {
        Map = id7
    } else if (objId == newId8[1]) {
        Map = id8
    } else if (objId == newId9[1]) {
        Map = id9
    } else if (objId == newId10[1]) {
        Map = id10
    }
    

   

    return (
        <div className="section">
            {bool == '' || bool == undefined ? '' : <ModalImage />}
            {Map.map((key) => (
                <div className='section_ota' key={key.id}>
                    <p className={key.text.length >= 60 ? 'section_p' : 'p_section'}>{key.text}</p>
                    <span className='data_section'>{key.data}</span>
                    <span className='check_section'>{id ? 
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="check_section bi bi-check2-all" viewBox="0 0 16 16">
                            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                            <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="check_section bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                        </svg>} 
                    </span> 
                </div> 
            ))}
        </div>
     );
}

export default section;