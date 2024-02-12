import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

export default function CommonLayout({ children }) {
  return (
    <main>
        <Navbar />
        <div>
          {children}
        </div>
        
    </main>
  )
}
