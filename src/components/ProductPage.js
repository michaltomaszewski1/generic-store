import products from "../resources/products.json"
import {useParams} from "react-router-dom";
import {useState} from "react";
import "../css/ProductPage.css";

const ProductPage = ({cart, setCart}) => {
    let {id} = useParams();
    let product = products[id - 1];
    const [quantity, setQuantity] = useState(1);

    const quantityChanged = event => {
        setQuantity(event.target.value);
    }

    const addToCart = event => {
        if (cart.hasOwnProperty(product.key)) {
            setCart({...cart, [product.key]: cart[product.key] + parseInt(quantity)});
        } else {
            setCart({...cart, [product.key]: parseInt(quantity)});
        }
    }

    return(
        <>
            <div className="product-page">
                <h2>{product.name}</h2>
                <img src={"/product-icons/" + product.image_source}/>
                <p>{product.long_description}</p>
                <p>Price: {product.price}$</p>
                <input type="number" min="1" onChange={quantityChanged} defaultValue={1}/>
                <button type="submit" onClick={addToCart}>Add to cart</button>
            </div>
        </>
    )
}

export default ProductPage;