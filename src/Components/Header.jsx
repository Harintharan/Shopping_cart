import {Link} from "react-router-dom"
import "./Header.css"

const Header = ({cart}) => {
  return (
    <div className="navbar">
        <div className="logo">Food Cart</div>
        <ul>
            <li>
                <Link to={"/"}>Home </Link>
              
            </li>

            <li>
            <Link to={"/Cart"}><span className="cartCount">{cart.length}</span>View Cart</Link>
            </li>
        </ul>
 
    </div>
  )
}

export default Header