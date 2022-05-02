import React from "react";
import {MdNavigateNext , MdNavigateBefore} from 'react-icons/md';

const Cards = ({id,name,job,image,text,index,setIndex,len})=>{
  const checkNumber = (number) => {
    if (number > len - 1) {
      return 0;
    }
    if (number < 0) {
      return len - 1;
    }
    return number;
  };
  const next = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
    return(
        <React.Fragment>
            <div className="card">
                <button className="btn" onClick={prev}>
                    <MdNavigateBefore></MdNavigateBefore>
                </button>
                <div className="card-content">
                    <div className="content-header">
                        <div className="img">
                            <img src={image} alt="" width="100%" height="100%"/>
                        </div>
                        <p className="name">{name}</p>
                        <p className="job">{job}</p>
                    </div>
                    <div className="content-body">
                        <p className="text">{text}</p>
                    </div>
                </div>
                <button className="btn" onClick={next}>
                    <MdNavigateNext></MdNavigateNext>
                </button>
            </div>
        </React.Fragment>
    )
}

export default Cards;