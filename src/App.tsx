import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"

import './assets/stylesheets/index.css'

import PageNavbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import Filter from "./components/Filter/Filter"

import NotFound from "./views/NotFound/NotFound"
import Login from "./views/Login/Login"
import Home from "./views/Home/Home"

function App() {
  const [user, setUser] = useState<string | null>(null)
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);
  const [filterOptions, setFilterOptions] = useState<{
    pointNeeded: number
    voucherType: {
      all: boolean,
      vouchers: boolean,
      products: boolean,
      others: boolean
    }
  }>({
    pointNeeded: 0,
    voucherType: {
      all: false,
      products: false,
      vouchers: false,
      others: false,
    }
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const applyFiterOptions = (filters: any) => {
    setFilterOptions(filters)
  }

  const handleBurgerClick = () => {
    setSidebarOpen(true);
    setFilterModalOpen(false)
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const handleFilterClick = () => {
    setFilterModalOpen(true);
    setSidebarOpen(false);
  };

  const handleFilterModalClose = () => {
    setFilterModalOpen(false);
  };

  const handleLogoutButton = () => {
    localStorage.clear()
    setFilterModalOpen(false)
    setSidebarOpen(false)
    setUser(null)
  }

  useEffect(() => {

    const storedToken = localStorage.getItem('token')
    if (storedToken) {
      setUser(storedToken)
    }

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'token' && event.newValue) {
        setUser(event.newValue)
        console.log('Changed!!!!')
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return (
    <div id="app">
      {user ? (
        <>
          <PageNavbar onClickLeftMenu={handleBurgerClick} onClickRightMenu={handleFilterClick} />
          <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} onLogout={handleLogoutButton} />
          <Filter
            handleFilterButton={applyFiterOptions}
            isOpen={isFilterModalOpen}
            onClose={handleFilterModalClose} />

          <Routes>
            <Route index path="/" element={<Home apiFilters={filterOptions} />} />
            <Route path="/logout" element={<>Logout</>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  )
}

export default App
