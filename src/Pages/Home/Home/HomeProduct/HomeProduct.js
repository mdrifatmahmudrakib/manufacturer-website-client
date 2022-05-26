import React from 'react';
import AllProductData from '../../../../hooks/AllProductData';
import ShowProduct from '../../../ShowProduct/ShowProduct';

const HomeProduct = () => {
    const [products] = AllProductData();
    return (
        <div className="px-12">
            <div>
                <h3 className='m-10 text-center text-2xl font-bold'>All</h3>
            </div>
            <div className="grid grid-cols-3 gap-10">
                {products.slice(0, 6).map((product) => (
                    <ShowProduct
                        product={product}
                        key={product._id}
                    ></ShowProduct>
                ))}
            </div>
        </div>
    );
};

export default HomeProduct;