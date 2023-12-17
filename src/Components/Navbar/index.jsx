import { Icon } from '@iconify/react'
import { useState } from 'react'

export const NavBar = () => {

    const [products, setProducts] = useState(0);
    const productsInCart = products;

    const productHandler = () => {
        setProducts(products => products + 1)
    }

    const Routes = [
        {path: '/', siteName: 'Home' },
        {path: '/about-us', siteName: 'About Us'},
        {path: '/contact-us', siteName: 'Contact Us'}
    ]
    
    const AppRoutes = [
        { path: '/my-orders', siteName: 'My Orders' },
        {path: '/sign-in', siteName: 'Sign In'},
    ]

  return (
    <nav className='flex justify-between px-10 py-5 text-white bg-black text-center content-center items-center'>
        <ul className='flex gap-5'>
            {
                Routes.map( route => (
                    <li key={route.path}><a href={route.path}>{route.siteName}</a></li>
                ))
            }
        </ul>

        <h1 className='font-bold text-2xl'>MOURAL</h1>

        <ul className='flex gap-5 items-center'>
            {
                AppRoutes.map( route => (
                    <li key={route.path}><a href={route.path}>{route.siteName}</a></li>
                ))
            }
            <span className="flex items-center">

                {
                    <div>
                <Icon icon="solar:cart-large-2-line-duotone" /> 
                <button onClick={productHandler}>
                {productsInCart}

                </button>
                    </div>
                
                }
            </span>

        </ul>
    </nav>
  )
}
