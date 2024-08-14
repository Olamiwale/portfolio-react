import React from "react";
import Sidebar from "./Sidebar";
import Layout from "./Layout";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About";

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
