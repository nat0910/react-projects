import React , { useEffect , useState } from "react";
import reviews from './data';
import Cards from "./Card";

const App = ()=>{

    const [profiles, setProfile] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setProfile(reviews);
    }, [])

    const profile = profiles[index];


    return (
    <React.Fragment>
        <h1 className="head">Reviews</h1>
        <div className="container">
            <Cards  {...profile}index={index} setIndex={setIndex} len={reviews.length}></Cards>
        </div>
    </React.Fragment>);
}


export default App;