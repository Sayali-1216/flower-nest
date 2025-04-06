import React from 'react';
import ReactDOM from "react-dom/client"
import Main from '../garland/Main';
import App from "./App"
import Home from '../garland/Home';
import Header from '../new/header';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// const root=ReactDOM.createRoot(document.querySelector("#root"));
// root.render(<Main/>);



const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Home/>);
