import React , { useEffect , useState } from "react";
import questions from "./data";
import Questions from "./q&a";

const App = ()=>{

    const [data, setData] = useState([])

    useEffect(() => {
        setData(questions);
    }, [questions])

    console.log(data);
    return(
        <React.Fragment>
            <div className="container">
                <div className="sidetitle">
                    <h2>questions and answers about login</h2>
                </div>
                <div className="area">
                    {
                        data.map((questions)=>{
                            let question = questions;
                            return <Questions key={question.id} {...question}/>
                        })
                    }
                </div>
            </div>
        </React.Fragment>

    )
}

export default App;