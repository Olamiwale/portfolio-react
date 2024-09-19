import React from "react";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import { BrowserRouter as Router } from "react-router-dom";


export default function App() {
  return (
    <> 
    <Router>

      <div className="fixed w-full">
        <div className="flex">
        <Sidebar />
        <Layout />
      </div>

     
      </div>
      
    </Router>
    <div>
   
    </div>
    </>
  );
}
