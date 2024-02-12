import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

export default function CommonLayout({ children }) {
  return (
    <main>
        <Navbar />
        
          <div className='py-28'>
            {children}
          </div>
        <Footer/>
    </main>
  )
}
