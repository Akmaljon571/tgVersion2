import { useRef } from 'react'
import data from '../data/data'
import useInput from '../dataInput/UseInput'
import til from '../til/til'
import useTil from '../useTil/UseTil'
import './footer.scss'

function Footer() {
    // til ozgartiruvchi value
    const { bildirish, value, id,  } = useTil()
    const { id1, setid1, id2, setid2, id3, setid3, id4, setid4, id5, setid5, id6, setid6, id7,  setid7, id8,  setid8, id9,  setid9,id10, setid10 } = useInput()
    localStorage.setItem('id1', JSON.stringify(id1));
    localStorage.setItem('id2', JSON.stringify(id2));
    localStorage.setItem('id3', JSON.stringify(id3));
    localStorage.setItem('id4', JSON.stringify(id4));
    localStorage.setItem('id5', JSON.stringify(id5));
    localStorage.setItem('id6', JSON.stringify(id6));
    localStorage.setItem('id7', JSON.stringify(id7));
    localStorage.setItem('id8', JSON.stringify(id8));
    localStorage.setItem('id9', JSON.stringify(id9));
    localStorage.setItem('id10', JSON.stringify(id10));
    //input valuesi uchun Ref
    const shef = useRef()

    // footer input submit
    let inputSubmit = (evt) => {
       evt.preventDefault()
       if (shef.current.value == '') return
       let newObjId = bildirish.map((key) => key.id)
       let vaqt = new Date().getHours()
       let minut = new Date().getMinutes()
       if (vaqt < 10) {
           vaqt = `0${vaqt}`
        } 
        if (minut < 10) {
           minut = `0${minut}`
       }
       let qa = `${vaqt}:${minut}`

        let newObj = {
        key1: newObjId.join(''),
        data: qa,
        id: new Date().getTime(),
        text: shef.current.value,
        belgi: id,
        jonatishi: true,
        boolean: true
        }
        if (newObjId == 1) {
            setid1([newObj, ...id1])
                localStorage.setItem('id1', JSON.stringify(id1))
            } else if (newObjId == 2) {
                setid2([newObj, ...id2])
                localStorage.setItem('id2', JSON.stringify(id2))
            }else if (newObjId == 3) {
                setid3([newObj, ...id3])
                localStorage.setItem('id3', JSON.stringify(id3))
            } else if (newObjId == 4) {
                setid4([newObj, ...id4])
                localStorage.setItem('id4', JSON.stringify(id4))
            } else if (newObjId == 5) {
                setid5([newObj, ...id5])
                localStorage.setItem('id5', JSON.stringify(id5))
            } else if (newObjId == 6) {
                setid6([newObj, ...id6])
                localStorage.setItem('id6', JSON.stringify(id6))
            } else if (newObjId == 7) {
                setid7([newObj, ...id7])
                localStorage.setItem('id7', JSON.stringify(id7))
            } else if (newObjId == 8) {
                setid8([newObj, ...id8])
                localStorage.setItem('id8', JSON.stringify(id8))
            } else if (newObjId == 9) {
                setid9([newObj, ...id9])
                localStorage.setItem('id9', JSON.stringify(id9))
            } else if (newObjId == 10) {
                setid10([newObj, ...id10])
                localStorage.setItem('id10', JSON.stringify(id10))
            }
         shef.current.value = ''
    
    }






    return (
       <footer className="footer">
         <div className="footer_inp_otas">
         <label htmlFor="rasm">
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="footer_img_svg bi bi-image" viewBox="0 0 16 16">
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
        </svg>
        <input type="file" className='none' id='rasm' name='rasm' />
         </label>
        <form onSubmit={inputSubmit}>
            <input ref={shef} type="text" className="footer_input" placeholder={til[value].inp} />
        </form>
         </div>
         <div className="svg_footer_otas">
         <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-mic" viewBox="0 0 16 16">
            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"/>
         </svg>
         </div>
       </footer>
    );

    }
export default Footer;