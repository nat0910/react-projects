import { useRef , useEffect , useState } from "react";
import { tabs } from "./data";

function Navbar() {

    const [showNav, setShowNav] = useState(false)

    const navtoggle = ()=>{
        let element = document.querySelector('.nav-toggle');
        let link = document.querySelector('.nav-content')
      
        link.classList.toggle('toggle-active-nav')
        element.classList.toggle('toggle-active');

     }

    
    return(
        <>
            <nav>
                <div className="nav-container">
                    <div className="nav-header">
                        <a className="logo" href='/'>logo</a>
                        <div className="nav-toggle" onClick={()=>navtoggle()}>
                                <span></span>
                                <span></span>
                                <span></span>
                        </div>
                    </div>
                    <div className='nav-content' >
                        <ul>
                            {
                                tabs.map((tab)=>{
                                    let { id , url , title} = tab;
                                    return (
                                        <>
                                            <li key={id}>
                                                <a href={url}>{title}</a>
                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;