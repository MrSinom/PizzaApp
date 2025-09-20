import { Link } from "react-router-dom";
import SearchOrder from "../fetures/order/SearchOrder";


function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Company.</Link>

      <SearchOrder/>
    </header>
  )
};

export default Header
