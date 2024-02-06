import ProductPreview from "./ProductPreview";
import "../css/CartItem.css";

const CartItem = ({product, quantity, cart, setCart}) => {
    const updateQuantity = (event) => {
        quantity = parseInt(event.target.value);
        setCart({...cart, [product.key]: quantity});
        console.log(cart);
    }

    const removeFromCart = () => {
        delete cart[product.key];
        setCart({...cart});
        console.log(cart);
    }
    return(
        <li className="cart-item">
            <ProductPreview product={product}/>
            <div className="cart-item-control">
                <button onClick={removeFromCart}>X</button>
                <div>
                    <p>Quantity</p>
                    <input type="number" min={1} value={quantity} onChange={updateQuantity}/>
                </div>
                <p>Total: {(quantity * product.price).toFixed(2)}$</p>
            </div>
        </li>
    )
}

export default CartItem