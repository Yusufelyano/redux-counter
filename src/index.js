import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App.js"
import "./index.css";

const reducer = (state = 0, action) => {
   if(action.type === "плюс"){
      return state + 1
   } else if (action.type === "минус"){
      return state - 1
   }
   return state
   
   
}

const store = createStore(reducer)


ReactDom.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
)