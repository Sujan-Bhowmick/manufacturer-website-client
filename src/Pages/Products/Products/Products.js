
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('https://manufacturer-website-nvqi.onrender.com/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                    setTreatment = {setTreatment}
                > </Product>)
            }
            </div>
        </div>
    );
};

export default Products;