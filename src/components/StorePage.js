import React, {useState} from "react";
import products from "../resources/products.json"
import ProductPreview from "./ProductPreview";

const StorePage = () => {
    const [filter, setFilter] = useState("");

    const changeFilter = (event) => {
        setFilter(event.target.value.toLowerCase());
    }

    return products&&(
        <>
            <input type="text" placeholder="search" onChange={changeFilter}/>
            <ul>
                {products.filter(product => product.name.toLowerCase().includes(filter)).map((product) => {
                    return <li><ProductPreview product = {product}/></li>
                })}
            </ul>
        </>
    )
}

export default StorePage