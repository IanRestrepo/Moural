import React from 'react'

export const MainLayout = ({ children }) => {
  return (
    <div className='flex flex-wrap mx-auto px-8 gap-5 items-center mt-20'>
        { children }
    </div>
  )
}
