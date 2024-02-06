import {Link} from "react-router-dom";
import "../css/ProductPreview.css";

const ProductPreview = ({product}) => {
    return (
        <Link to={"/product/" + product.key}>
            <div className="product-preview">
                <img src={"/product-icons/" + product.image_source}/>
                <div className="product-info">
                    <div>
                        <h5>{product.name}</h5>
                        <p>{product.short_description}</p>
                    </div>
                    <p>{product.price}$</p>
                </div>
            </div>
        </Link>
    )
}


export default ProductPreview