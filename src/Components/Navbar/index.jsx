import React from 'react'

export const NavBar = () => {

    const AppRoutes = [
        {path: '/', siteName: 'Home' },
        {path: '/about-us', siteName: 'About Us'},
        {path: '/contact-us', siteName: 'Contact Us'}
    ]

  return (
    <nav className='flex justify-center py-5 text-white bg-black'>
        <ul className='flex gap-5'>
            {
                AppRoutes.map( route => (
                    <li key={route.path}><a href={route.path}>{route.siteName}</a></li>
                ))
            }
        </ul>
    </nav>
  )
}
