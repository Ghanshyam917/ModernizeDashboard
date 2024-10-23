import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Modern from "./Components/Pages/Modern";
import Ecommerce from "./Components/Pages/Ecommerce";
import FrontendPages from "./Components/Pages/FrontandPages";
import Contacts from "./Components/Pages/Contacts";
import Blog from "./Components/Pages/Blog";
import Chats from "./Components/Pages/Chats";
import Navbar from "./Components/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { useState } from "react";

function App() {
  const [sidemenu,handleSidemenu] = useState(true);
  const toggleSidebar =() =>{
    if(sidemenu){
      handleSidemenu(false)
    }else{
      handleSidemenu(true)
    }
  }
  return (
    <>
      <Router>
        <Sidebar sidemenu={sidemenu}>
          <Navbar toggleSidebar={toggleSidebar}/>
          <Routes>
            <Route path="/" element={<Modern />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/frontendpages" element={<FrontendPages />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/chats" element={<Chats />} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;
