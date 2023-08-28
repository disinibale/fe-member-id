import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './assets/stylesheets/index.css'
import Home from "./views/Home/Home"
import Sidebar from "./components/Sidebar/Sidebar"
import Filter from "./components/Filter/Filter"
import PageNavbar from "./components/Navbar/Navbar"

function App() {

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);

  const handleBurgerClick = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const handleFilterClick = () => {
    setFilterModalOpen(true);
  };

  const handleFilterModalClose = () => {
    setFilterModalOpen(false);
  };

  return (
    <div id="app">
      <BrowserRouter>
        <PageNavbar onClickLeftMenu={handleBurgerClick} onClickRightMenu={handleFilterClick} />
        <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
        <Filter isOpen={isFilterModalOpen} onClose={handleFilterModalClose} />
        
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cards" element={<>Cards</>} />
          <Route path="/profile" element={<>Profile</>} />
          <Route path="/logout" element={<>Logout</>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
