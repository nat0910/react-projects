export const reducer = (state,action)=>{
  if (action.type === 'ADD_ITEM') {
    return {
      ...state,
      item_list   : [...state.item_list , action.payload],
      popupText   : 'Item added sucessfully !! 😊',
      popupShow   : true,
      popupType   : 'sucess',
    };
  }
    if (action.type === 'EDITED_LIST') {
    return {
      ...state,
      item_list   : action.payload,
      popupText   : 'Item edited sucessfully !! 😊',
      popupShow   : true,
      popupType   : 'sucess',
      buttonText  : '+ ADD',
      buttonType  : 'add',
      label       : 'Enter item name : ',
    };
  }
  if (action.type === 'EMPTY_FEILD') {
      return{
        ...state,
        popupText   : 'Please enter a item !!',
        popupShow   : true,
        popupType   : 'danger',
      }
  }
  if (action.type === 'CLOSE_POPUP') {
    return {
      ...state,
      popupShow   : false
    }
  }
  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      item_list   : action.payload,
      popupText   : 'Item removed sucessfully !! 😊',
      popupShow   : true,
      popupType   : 'sucess',
    }
  }
    if (action.type === 'CLEAR_ALL') {
    return {
      ...state,
      item_list   : [],
      popupText   : 'All items have been removed !! 😊',
      popupShow   : true,
      popupType   : 'sucess',
    }
  }
  if (action.type === 'EDIT') {
        return {
      ...state,
      popupShow   : false,
      popupText   : ' ',
      buttonText  : 'EDIT',
      buttonType  : 'edit',
      label       : 'Edit item name : ',
    }
  }
}

