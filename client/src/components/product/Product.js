import React from 'react'
import './product.css';
// import Hotel from '../../utils/hotel.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Product = ({ p }) => {
    const navigate = useNavigate();


    return (
        <div className='product-wrapper ' onClick={() => navigate(`/product/${p._id}`)}>
            <div className='product-image'>
                <img src={p.photos[0]} alt='Hotel' />
            </div>
            <div className='product-details'>
                <div className='product-title'>
                    <span>{p.city},  {p.address}</span>
                    <span className='product-rating'><StarBorderIcon /><p>4.88</p></span>

                </div>
                <div className='product-description'>
                    <p>Hosted By Jenifer</p>
                    <p>Aug 3-9</p>
                    <span><p>${p.cheapestPrice}</p>night</span>

                </div>
            </div>

        </div>
    )
}

export default Product