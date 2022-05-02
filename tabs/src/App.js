import React , { useEffect , useState } from "react";
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';

function App() {

  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0)

  const dataFetch = async(URL)=>{
    let req = await fetch(URL);
    if (req.status>=200 && req.status<=299) {
      let res = await req.json();
      setData(res);
    }
  }
  const addClass = ({company})=>{
    
      let tommy = document.getElementById('TOMMY');
      let bigdrop = document.getElementById('BIGDROP');
      let cuker = document.getElementById('CUKER');

      tommy.classList.remove('active');
      bigdrop.classList.remove('active');
      cuker.classList.remove('active');

      if (company==='BIGDROP') {
        bigdrop.classList.add('active');

        if (offset === 0) {
          document.getElementById('3').style.top= offset-100+'%';
          document.getElementById('2').style.top= offset-100+'%';
          document.getElementById('1').style.top= offset-100+'%';
        }
        else if(offset===-200){
          document.getElementById('3').style.top= offset+100+'%';
          document.getElementById('2').style.top= offset+100+'%';
          document.getElementById('1').style.top= offset+100+'%';
        }
        setOffset(-100);

      }else 
        if(company==='CUKER'){
          cuker.classList.add('active');
          if (offset===-100) {
            document.getElementById('3').style.top= offset-100+'%';
            document.getElementById('2').style.top= offset-100+'%';
            document.getElementById('1').style.top= offset-100+'%';
          }
          else 
            if (offset===0) {
            document.getElementById('3').style.top= offset-200+'%';
            document.getElementById('2').style.top= offset-200+'%';
            document.getElementById('1').style.top= offset-200+'%';
            }
          setOffset(-200);
        }
      else{
      tommy.classList.add('active');
      if (offset===-100) {
            document.getElementById('3').style.top= offset+100+'%';
            document.getElementById('2').style.top= offset+100+'%';
            document.getElementById('1').style.top= offset+100+'%';
          }
          else 
            if (offset===-200) {
            document.getElementById('3').style.top= offset+200+'%';
            document.getElementById('2').style.top= offset+200+'%';
            document.getElementById('1').style.top= offset+200+'%';
            }
      setOffset(0);
      }
  }

  useEffect(() => {
    dataFetch(url);
  }, [])

  return (
    <React.Fragment>
      <header>
        <h1 className="heading">experience</h1>
        <div className="underline"></div>
      </header>
      <div className="container">
        <section className="sidebar">
          <div className="sidebar-header">
            <p>Company</p>
            <div className="underline"></div>
          </div>
          <ul>{
              data.map((companies)=>{
                let{id,company} = companies;
                return(
                  <li key={id} onClick={()=>addClass({company})} id={company}>{company}</li>
                )
              })
            }
          </ul>
        </section>
        <article className="area">
          {
            data.map((tabs)=>{
              let { id , title , dates , duties , company } = tabs;
              return(
                <React.Fragment>
                  <section className="content"  key={id} id={tabs.order}>
                    <div className="content-header">
                      <p className="title">{title}</p>
                      <p className="company">{company}</p>
                      <p className="dates">{dates}</p>
                      <div className="underline"></div>
                    </div>
                    <div className="content-body">
                      {
                        duties.map((paras)=>{
                          let para = paras;
                          return(
                            <div className="para">
                              <FaAngleDoubleRight className="bullet"/>
                              <p>{para}</p>
                            </div>
                          )
                        })
                      }
                    </div>
                    <div className="content-footer">
                      <button className="learn">learn more</button>
                    </div>
                  </section>
                </React.Fragment>
              )
            })
          }
        </article>
      </div>
    </React.Fragment>
  );
}

export default App;
