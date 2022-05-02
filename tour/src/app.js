import React , { useState , useEffect } from "react";

const url = 'https://course-api.com/react-tours-project';


const App = ()=>{

    const [data, setData] = useState([]);
    const [item, setItem] = useState(true);


    const dataFetch = async()=>{

        let request = await fetch(url);

        if (request.status>=200 && request.status<=299) {   
            let response = await request.json();
            setData(response)
        }

    }

    const removeItem = (id)=>{
        let remove = data.filter((tour)=>tour.id !== id);
        setData(remove)
    }

    useEffect(() => {
        dataFetch();
    }, [])

    return <>
        <div className="container">
            <h1>Tours</h1>
            {
                data.map((data_tour)=>{
                    let tour = data_tour;

                    return <Cards key={tour.id} {...tour} removeItem= {removeItem}></Cards>

                })
            }
        </div>
    </>
}

const Cards = ({ id, name , image , info , price ,removeItem})=>{
    const [seemore, setSeemore] = useState(false);

    const seeMore = ()=>{
        if (seemore === true) {
            setSeemore(false);
        }
        else
            setSeemore(true);
    }

    return <React.Fragment>
        <div className="items">
            <img src={image} alt={name}/>
            <div className="items-content">
                <div className="items-content-header">
                    <p className="heading">{name}</p>
                    <p className="price">$ {price}</p>
                </div>
                
                <p className="info">{seemore ? info : `${info.substring(0,200)}. . . `}
                    <button type="button" className="seemore" onClick={()=>seeMore()}>
                        {seemore ? 'read less':'read more'}
                    </button>
                </p>
                <button type="button" className="btn" onClick={()=>removeItem(id)}>not interested</button>
            </div>
        </div>
    </React.Fragment>

}

export default App;