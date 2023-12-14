import { useRoutes, BrowserRouter } from 'react-router-dom';
import { MainLayout } from '../../Layouts/MainLayout';
import { NavBar } from '../../Components/Navbar';
import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import { MyOrders } from '../MyOrders';
import { MyOrder } from '../MyOrder';
import { NotFound } from '../NotFound';
import { SignIn } from '../SignIn';
import { AboutUs } from '../AboutUs';
import { ContactUs } from '../ContactUs';


export const App = () => {

  const AppRoutes = () => {
    let Routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/my-account', element: <MyAccount /> },
      { path: '/my-order', element: <MyOrder /> },
      { path: '/my-orders', element: <MyOrders /> },
      { path: '/sign-in', element: <SignIn /> },
      { path: '/about-us', element: <AboutUs/>},
      { path: '/contact-us', element: <ContactUs/>},
      { path: '/*', element: <NotFound /> },
    ])

    return Routes
  }

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <MainLayout>
          <AppRoutes />
      </MainLayout>
    </BrowserRouter>
    </>
  )
}
