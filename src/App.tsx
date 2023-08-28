import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './assets/stylesheets/index.css'
import Home from "./views/Home/Home"
import Sidebar from "./components/Sidebar/Sidebar"
import Navbar from "./components/Navbar/Navbar"

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
        <Navbar onClickLeftMenu={handleBurgerClick} onClickRightMenu={handleFilterClick} />
        <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />

        {isFilterModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 z-10" onClick={handleFilterModalClose}></div>
        )}
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
