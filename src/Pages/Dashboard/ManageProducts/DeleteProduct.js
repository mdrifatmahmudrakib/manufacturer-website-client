import React from 'react';

const DeleteProduct = ({ product }) => {
    const { name, price, quantity, minimum_quantity } =
        product;
    return (
        <tr>

            <td>{name}</td>
            <td>${price}</td>
            <td>{minimum_quantity}</td>

            <td>{quantity}</td>


            <td><button class="btn btn-xs">Delete Item</button></td>
        </tr>
    );
};

export default DeleteProduct;