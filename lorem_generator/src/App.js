import React , { useState } from "react";
import Text from "./data";

const App = ()=>{


    const [text,setText] = useState([]);
    const [count,setCount] = useState(0);
    
    console.log(typeof count);
    

    const generate = (e)=>{
        e.preventDefault();
        let amount = count;

        if (count<=0) {
            amount=1    
        }
        if (count>8) {
            amount=8;
        }
        setText(Text.slice(0,amount));
    }

    return(
        <React.Fragment>
            <div className="container">
                <header>
                    <div className="title">
                        <p>Lorem ipsum generator</p>
                    </div>
                    <form className="input" className="form" onSubmit={generate}>
                        <div className="form-control">
                            <label htmlFor="form-input">Paragraphs :</label>
                            <input type="number" className="form-input" id="form-input" min={0} step={1} value={count} onChange={(e)=>setCount(e.target.value)}/>
                        </div>
                        <button type="submit">generate</button>
                    </form>
                </header>
                <main>
                    {text.map((para,index)=>{

                        return<>
                            <p key={index}>{para}</p>
                        </>
                    })}
                </main>
            </div>
        </React.Fragment>
    )
}

export default App;