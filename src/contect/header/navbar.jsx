import { useRef, useState, useEffect, useContext } from 'react'
import  useTil  from '../useTil/UseTil'
import til from '../til/til'

function Navbar() {
  //input value ozgarishi uchun state
  const { value } = useTil()
  const shef = useRef()
  const svgsvg = useRef()

  //Men
  let men = (evt) =>{
    evt.target.classList = 'open'
  }

  let change = () => {
    if( shef.current.value.length >= 1){
      svgsvg.current.classList = 'Navbar_XX bi bi-x';
    } else if (shef.current.value.length == 0) {
      svgsvg.current.classList = 'Navbar_XX bi bi-x';
    }
  }

  return (
      <div className="Navbar">
      <div className="Navbar_Nav">
        <div onClick={men} id="nav-icon1">
          <span></span>
          <span></span>
          <span></span>
        </div>
          <span className="Navbar_belgi"></span>
        <input onChange={change} ref={shef} type="text" placeholder={til[value].plasholder} className="Navbar_Input" />
        <svg
        ref={svgsvg}
        onClick={()=> shef.current.value = ''} 
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        className="Navbar_X bi bi-x "
        viewBox="0 0 16 16"
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
      </div>
    </div>
  );
}

export default Navbar;
