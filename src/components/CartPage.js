import products from "../resources/products.json";
import CartItem from "./CartItem";
import "../css/CartPage.css";
import {useNavigate} from "react-router-dom";

const CartPage = ({cart, setCart}) => {
    const navigate = useNavigate();
    const calculateTotal = (cart) => {
        return  products.filter(product => cart.hasOwnProperty(product.key))
            .map(product => product.price * cart[product.key]).reduce((a, b) => a + b, 0).toFixed(2);
    }

    const pay = () => {
        alert("Order Completed!");
        setCart({});
        navigate("/");
    }

    if (Object.keys(cart).length !== 0)
    return(
        <>
            <ul>
                {products.filter(product => cart.hasOwnProperty(product.key)).map(product =>
                    <CartItem setCart={setCart} cart={cart} product={product} quantity={cart[product.key]}/>)}
            </ul>
            <div className="cart-summary">
                <h3>Your cart total is {calculateTotal(cart)}$</h3>
                <button onClick={pay}>Pay</button>
            </div>
        </>
    )
    return (
        <h3>Your cart is empty</h3>
    )
}

export default CartPage;