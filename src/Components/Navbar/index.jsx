import React from 'react'

export const NavBar = () => {

    const AppRoutes = [
        {path: '/', siteName: 'Home' },
        {path: '/about-us', siteName: 'About Us'},
        {path: '/contact-us', siteName: 'Contact Us'}
    ]

  return (
    <nav className=''>
        <ul>
            {
                AppRoutes.map( route => (
                    <li key={route.path}><a href={route.path}>{route.siteName}</a></li>
                ))
            }
        </ul>
    </nav>
  )
}
