import React , { useEffect , useState } from "react";
import { MdOutlineKeyboardArrowLeft , MdOutlineKeyboardArrowRight } from "react-icons/md";
import data from "./data";


const App = ()=>{

    const [peoples, setPeoples] = useState(data);
    const [index, setIndex] = useState(0);

    
    useEffect(() => {
        const lastIndex = peoples.length - 1;
        if (index < 0) {
        setIndex(lastIndex);
        }
        if (index > lastIndex) {
        setIndex(0);
        }
    }, [index, peoples]);

    useEffect(() => {
        
        let slide = setInterval(() => {
            setIndex(index)
        }, 5000);
        return () => {
            clearInterval(slide);
        }
    }, [index])

    return(
        <React.Fragment>
            <p className="title">Reviews</p>
            <div className="container">
                <div className="arrow" onClick={()=>setIndex(index-1)} >
                    <MdOutlineKeyboardArrowLeft></MdOutlineKeyboardArrowLeft>
                </div>
                <div className="area">
                    {
                        peoples.map((person,personIndex)=>{
                            let {id,title,image,quote,name} = person;

                            let position = 'next';
                            if (personIndex===index) {
                                position = 'active';
                            }
                            if (personIndex===index - 1 || (personIndex===0 && personIndex === peoples.length-1)) {
                                position = 'prev';
                            }

                            return(
                                <React.Fragment>
                                    <article className={position} key={id}>
                                        <div className="content-header">
                                            <div className="img-cont">
                                                <img className="person-img" src={image} alt={name} />
                                            </div>
                                            <p className="name">{name}</p>
                                            <p className="cont-title">{title}</p>
                                        </div>
                                        <div className="content-body">
                                            <p className="quote">{quote}</p>
                                        </div>
                                    </article>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
                <div className="arrow" onClick={()=>setIndex(index+1)}>
                    <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                </div>
            </div>
        </React.Fragment>
    )
}

export default App;