import Header from "./Header"
import CartOverview from "../fetures/cart/CartOverview"
import {Outlet} from "react-router-dom"

function AppLayout() {
    return (
        <div>
         <Header/>
        <main>
             <h1>COntent</h1>
             <Outlet/>
        </main>
        <CartOverview/>
        </div>
    )
    }

export default AppLayout