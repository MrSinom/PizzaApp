import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './UI/Home'
import Menu, {loader as menuLoader} from './fetures/menu/Menu'
import Cart from './fetures/cart/Cart'
import CreateOrder from "./fetures/order/CreateOrder";
import Order,{loader as orderLoader}  from "./fetures/order/Order"
import AppLayout from "./UI/AppLayout";
import Error from './UI/Error'

const router = createBrowserRouter([{
  element:<AppLayout/>,
  errorElement: <Error/>,
  children: [
      {
    path:'/',
    element: <Home/>
  },
  {
    path:'/menu',
    element: <Menu />,
     errorElement: <Error/>,
      loader: menuLoader,
  },
  {
    path: '/cart',
    element: <Cart/>
  },
  {
    path: '/order/new',
    element: <CreateOrder/>
  },
  {
    path: '/order/orderId',
    element: <Order/>,
    loader: orderLoader,
    errorElement: <Error/>,
  }
  ]
}])

function App() {
  return <RouterProvider router= {router}/>
}

export default App;
