import React from "react";
import ReactDOM from 'react-dom';
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import OrderList from "./OrderList";


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Heading></Heading>
    <Paragraph />
    <OrderList></OrderList>

  </>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// // //const myElement=<h1>Hello Friends :{5+5}</h1>
// // // const myElement = React.createElement('h1', {}, 'createElement Working')
// // const myElement=(<ul>List of Fruits
// //   <li>Apple</li><li>Orange</li><li>Banana</li>
// // </ul>);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// //root.render(myElement);


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
