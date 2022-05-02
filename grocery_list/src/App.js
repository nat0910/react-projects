import React , { useEffect , useRef , useReducer , useState } from 'react';
import {v4} from 'uuid';
import {FiEdit} from 'react-icons/fi';
import { MdOutlineDelete } from 'react-icons/md';
import {reducer} from './reducer';
import {Modal} from './Modal';

const getData = ()=>{
  let data = localStorage.getItem('ist');
  if (data) {
    return JSON.parse(localStorage.getItem('list'))
  }
  else{
    return []
  }
}

const defaultState = {
  item_list   : getData(),
  popupShow   : false,
  popupText   : ' ',
  label       : 'Enter item name : ',
  buttonText  : '+ ADD',
  buttonType  : 'add',
  popupType   : 'sucess'
};

function App() {

  const [item, setItem] = useState({ id : ''  , itemName  : ''  });
  const [state, dispatch] = useReducer( reducer , defaultState  );
  const inputCont = useRef( null  );

  const formSubmit = (e)=>{
    e.preventDefault();
    if (!item.itemName) {
      dispatch({  type  : 'EMPTY_FEILD' });
    }
    else if (item.itemName && (state.buttonType==='edit')){
      let edited = state.item_list.map((list_item)=>{
        let { id } = list_item;
        if (id===item.id) {
          return {...list_item,itemName:item.itemName}
        }
        return list_item
      });
    dispatch({  type  : 'EDITED_LIST' , payload : edited  })
    setItem({ ...item , itemName:'' })
    }
    else{
      const final_item = {...item,id : v4()};
      dispatch({  type  : 'ADD_ITEM' ,  payload : final_item  });
      setItem({ ...item , itemName:'' })
    }
  }

  const closePopup = ()=>{
    dispatch({  type  : 'CLOSE_POPUP' })
  }

  const edit = (index)=>{
    let search = state.item_list.find((item)=>item.id === index);
    setItem(search)
    dispatch({type:'EDIT'})
  }

  const remove = (id)=>{
    let sorted = state.item_list.filter((item)=>item.id!==id);
    dispatch({  type  : 'REMOVE_ITEM' , payload : sorted  })
  }

  const clearAll = ()=>{
     if (!state.item_list.length) {
      dispatch({  type  : 'EMPTY_FEILD' });
    }
    else{
      dispatch({  type  : 'CLEAR_ALL'});

    }
  }
  
  useEffect(() => {
    inputCont.current.focus();
  });

  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(state.item_list))
  }, [state.item_list]);
  

  return (
    <React.Fragment>
      <section>
        <header>
          <p className='title'>Grocery List</p>
          <p className="quote">Manage your grocery list !!</p>
        </header>
        {state.popupShow && <Modal {...state} closePopup = {closePopup} ></Modal>}
        <main>
          <form className='form' onSubmit={formSubmit}>
            <div className="form-control">
              <label htmlFor="input">{state.label}</label>
              <input type="text" name="item" id="input" value={item.itemName} placeholder='e.g. Egg' ref={inputCont} onChange={(e)=>{setItem({...item,itemName:e.target.value})}}/>
            </div>
            <button type="submit" className={state.buttonType}>{state.buttonText}</button>
          </form>
        </main>
        <footer>
          <div className="head">
            <div className="title">Item List</div>
            <button className="clear" onClick={clearAll}>Clear all</button>
          </div>
          <div className="container">
            {
              state.item_list.map((list_items)=>{
                let {id , itemName} =list_items
                return<>
                  <div className="items" key={id}>
                    <p>{itemName}</p>
                    <div className="action">
                      <FiEdit className='edit' onClick={()=>edit(id)}/>
                      <MdOutlineDelete className='delete' onClick={()=>remove(id)}/>
                    </div>
                  </div>               
                </>
              })
            }
          </div>
        </footer>
      </section>
    </React.Fragment>
  );
}

export default App;
