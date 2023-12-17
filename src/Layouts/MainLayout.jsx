import React from 'react'

export const MainLayout = ({ children }) => {
  return (
    <div className='h-screen bg-black overflow-hidden py-10'>
        { children }
    </div>
  )
}
