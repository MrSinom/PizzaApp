import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './UI/Home'
import Menu from './fetures/menu/Menu'
import Cart from './fetures/cart/Cart'
import CreateOrder from "./fetures/order/CreateOrder";
import Order from './fetures/order/CreateOrder'
import AppLayout from "./UI/AppLayout";
const router = createBrowserRouter([{
  element:<AppLayout/>,
  children: [
      {
    path:'/',
    element: <Home/>
  },
  {
    path:'/menu',
    element: <Menu /> 
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
    element: <Order/>
  }
  ]
}])

function App() {
  return <RouterProvider router= {router}/>
}

export default App;
