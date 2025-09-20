import Header from "./Header"
import Loader from './Loader'
import CartOverview from "../fetures/cart/CartOverview"
import {Outlet, useNavigation} from "react-router-dom"

function AppLayout() {
    const navigation = useNavigation();
    console.log(navigation)

    const isLoading = navigation.state === "loading";


    return (
        <div>
            {isLoading && <Loader/>}
         <Header/>
        <main>
             <h1>Content</h1>
             <Outlet/>
        </main>
        <CartOverview/>
        </div>
    )
    }

export default AppLayout