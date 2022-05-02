import { useEffect } from "react";
import {  MdWarning , MdOutlineInfo } from "react-icons/md"
export const Modal = ({ popupText , popupType , closePopup })=>{

    useEffect(() => {
        setTimeout(() => {
            closePopup();
        }, 5000);
    });
    

    return <>
        <div className={`modal ${popupType}`}>
            <div className="info">
                {
                    popupType  === 'sucess' ? <MdOutlineInfo className="sign"/> : <span>⚠️</span>
                }
                <p>{popupText}</p>
            </div>
            <p className="close" onClick={()=>closePopup()}>&times;</p>
        </div>
    </>
}

