import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './components/Register';
import JoinRoom from './components/JoinRoom';
import Login from './components/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  }, 
  {
    path: "/register",
    element:  <Register />,
  }, 
  {
    path: "/login",
    element:  <Login />,
  }, 
  {
    path: "/joinroom",
    element:  <JoinRoom/>,
  },
  //  {
  //   path: "/employees/add",
  //   element:  <AddEmployee/>,
  // }, {
  //   path: "/employees/update/:id",
  //   element:  <UpdateEmployee/>,
  // }, {
  //   path: "/employees/delete/:id",
  //   element:  <DeleteEmployee/>,
  // }, {
  //   path: "/employees/view/:id",
  //   element:  <ViewEmployee/>,
  // }, 
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />


   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
