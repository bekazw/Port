import {      
    combineReducers,
    createStore,
  } from 'redux';
//initial state
  const initialState = {
    currentSlide : 1
  }  
//actions

//reducer
  export const r_slide = (state = initialState, action) => {  
    switch (action.type) {
      case 'SLIDE':
        return { currentSlide : action.SlideDirection};      
      default:
        return state;
    }
  };

  ///
  export const reducers = combineReducers({  
    r_slide,
  });
  
  // store.js
  export function configureStore(initialState = {}) {  
    const store = createStore(reducers, initialState);
    return store;
  };
  
  export const store = configureStore();  