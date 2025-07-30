import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
function Layout() {
  return (
    <div>
      <Navbar />
      <main className="min-h-[80vh] px-4 sm:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
