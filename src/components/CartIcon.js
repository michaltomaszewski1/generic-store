import {Link} from "react-router-dom";
import icon from "../resources/shopping-cart-icon.svg";

const CartIcon = ({cart}) => {
    const countItemsInCart = (cart) => {
        let sum = 0;
        for (const cartKey in cart) {
            sum += cart[cartKey];
        }
        return sum;
    }

    return(
        <Link to="/cart">
            <div id="cart-icon">
                <img src={icon} alt="cart"/>
                <p>{countItemsInCart(cart)}</p>
            </div>
        </Link>
    )
}

export default CartIcon;