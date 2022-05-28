import { useEffect, useState } from 'react';

const AllProductData = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('https://mighty-beach-10745.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [products, setproducts])
    return [products, setproducts]

};

export default AllProductData;