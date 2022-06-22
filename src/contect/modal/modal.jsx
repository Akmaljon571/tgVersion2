import til from "../til/til";
import useTil from "../useTil/UseTil";
import './modal.scss'


function ModalImage() {
    let { bool, value } = useTil();
    let saveImage = bool[0].text;
    let savImage = window.URL.createObjectURL(saveImage)
    console.log(savImage);
    return ( 
        <>
           {bool.map((key)=>(
                <div className="saveSpan">
                <div key={key.id} className="save">
                    <div className="save_btnOtasi">
                        <label htmlFor="inm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                        </svg>
                            <input type="file" name="inm" id="inm" className="none" />
                        </label>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                           <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                        </svg>
                    </div>
                    <div className="save_img_o">
                     <img src={savImage} className="save_img_user" width = '250' height = '250' alt={til[value].alt} />
                    </div>
                    <p className="save_p">{til[value].tahrir}</p>
                    <label htmlFor="check">
                        <input type="checkbox" className="check" />
                        {til[value].check}
                    </label>
                    <p className="save_sar">{til[value].sar}</p>
                    <div className="save_inputOtas">
                      <input type="text" />
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                      </svg>  
                    </div>
                    <div className="buttonOtas">
                        <button className="save_add">{til[value].add}</button>
                        <button className="save_add">{til[value].cancel}</button>
                        <button className="save_add">{til[value].send}</button>
                    </div>
                </div>
              </div>
            ))}
        </>
     );
}

export default ModalImage;