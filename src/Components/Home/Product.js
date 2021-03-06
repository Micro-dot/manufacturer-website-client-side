import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Product = ({ product }) => {
    const { name, img, description, availavleQuantity, price, _id, MinimumOrder } = product;
    const navigate = useNavigate();
    const navigateInventory = id => {
        navigate(`/products/${id}`);
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card card-compact w-full h-full bg-base-100 shadow-md">
                <figure>
                    <img className='w-60 h-60 p-5' src={img} alt="Shoes" />
                </figure>
                <div class="card-body text-left">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p className='text-lg font-bold'>Quantity: {availavleQuantity}</p>
                    <p className='text-lg font-bold'>Minium Order: {MinimumOrder}</p>
                    <p className='text-lg font-bold'>Price: ${price}</p>
                    <div class="card-actions justify-end">
                        <button onClick={() => navigateInventory(_id)} class="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;