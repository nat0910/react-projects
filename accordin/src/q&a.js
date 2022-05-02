import React, { useState } from "react";
import { BsPlus , BsDash } from "react-icons/bs"

const Questions = ({id,title,info})=>{

    const [show, setShow] = useState(false);

    return(
        <React.Fragment>
            <div className="card">
                <div className="question">
                    <p className='question-title'>{title}</p>
                    {show ? <BsDash className="btn" onClick={()=>setShow(false)}/> : <BsPlus className="btn" onClick={()=>setShow(true)}/> }
                </div>
                {
                    show
                     && 
                    <div className="answer">
                        <div className="underline"></div>
                        <p className="info">{info}</p>
                    </div>
                }
            </div>
        </React.Fragment>
    )
}

export default Questions;