import React from "react";
import Sidebar from "./Sidebar";
import Layout from "./Layout";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="flex">

        <div className="fixed z-50">
             <Sidebar/>
        </div>

        <div className="fixed  right-0 ml-[100px] ">
           <Layout />
        </div>
        
        
        
       

       
      </div>
    </Router>
  );
}
