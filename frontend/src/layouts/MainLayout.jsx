import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/common/Topbar'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

const MainLayout = () => {
  return (
    <div className="site-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header and navigation blocks */}
      <Topbar />
      <Navbar />

      {/* Main Page Area */}
      <main style={{ flex: '1 0 auto' }}>
        <Outlet />
      </main>

      {/* Corporate footer block */}
      <Footer />
    </div>
  )
}

export default MainLayout
