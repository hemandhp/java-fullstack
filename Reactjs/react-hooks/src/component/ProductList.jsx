import React, { useEffect, useState } from "react";


function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setLoading(false);
            })
    }, []);
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2>Product List</h2>
            {products.map(product => (
                <p key={product.id}>{product.title}</p>
            ))}
        </div>
    )

}

export default ProductList;