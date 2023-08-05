import React, { useContext, useState } from 'react'
import './singleproduct.css';
import TopNav from '../../components/navbar/TopNav';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import Hotel from '../../utils/hotel.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../components/hooks/useFetch';
import { authContext } from '../../context/authContext';
import Reserve from '../../components/reserve/Reserve';



// import { DateRangePicker, DateRange } from "mui-daterange-picker";
const SingleProduct = () => {
    const [openModal, setOpenModal] = useState(false);
    const { user } = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();


    // const path = location.split("/"[2]);
    const id = location.pathname.split("/")[2];
    const { data } = useFetch(`/api/v1/hotel/${id}`);


    const handleReserve = () => {
        if (user) {
            setOpenModal(true);
        }
        else {
            navigate('/login')
        }

    }
    return (
        <div>
            <TopNav />
            <div className='single-product-container'>
                <div className='single-product-details-top'>
                    <div className='singleproduct-title'>{data.name}</div>
                    <div className='single-product-details'>
                        <div>
                            <span className='ratings'>4.8</span>
                            <span className='reviews'>6reviews</span>
                            <span className='address'>

                                {data.city}, Central Development Region, Nepal</span>
                        </div>
                        <div className='save-share'>
                            <span><FavoriteBorderIcon />save</span>
                            <span><IosShareOutlinedIcon />share</span>
                        </div>
                    </div>
                    <div className='single-product-image-container'>
                        {/* {data.photo.map((photo, i) => (

                        ))} */}
                        <div className='image-container-left'>
                            <img src={Hotel} alt='hotel' />

                        </div>
                        <div className='image-container-right'>
                            <div className='image-flex'>  <img src={Hotel} alt='hotel' /></div>
                            <div className='image-flex'>  <img src={Hotel} alt='hotel' /></div>
                            <div className='image-flex'>  <img src={Hotel} alt='hotel' /></div>
                            <div className='image-flex'>  <img src={Hotel} alt='hotel' /></div>



                        </div>
                    </div>

                </div>

                {/* bottom product details */}

            </div>
            <div className='singleproduct-details-bottom'>
                <div className='bottom-left-container'>
                    <div className='room-details-title'>Room in a bed and breakfast Hosted by Sandy</div>
                    <div className='feature'>
                        <span>1 king bed</span>
                        <span>shared bathroom</span>
                        <span>dogs  allowed</span>
                    </div>
                    <div className='slogan'>
                        <p>Room in a bed and breakfast
                        </p>
                        <span>Your own room in a home, plus access to shared spaces.</span>
                    </div>
                    <div className='host-heading'> meet your host</div>
                    <div className='host-container'>
                        <div className='host-wrapper'>
                            <div className='host-left'>
                                <div className='host-image'>
                                    <img src={Hotel} alt='nns' />
                                </div>
                                <div className='host-name'>Sandy</div>
                                Host

                            </div>
                            <div className='host-right'>
                                <div className='host-review'>
                                    <span>10</span>
                                    <span>reviews</span>
                                </div>
                                <div className='host-review'>
                                    <span>4.6 </span>
                                    <span>ratings</span>
                                </div>
                                <div className='host-review'>
                                    <span>10</span>
                                    <span>years hosting</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='bottom-right-container'>
                    <div className='checkout-container'>

                        <div className='reserve-button'>
                            <button onClick={handleReserve}>reserve</button>
                        </div>
                    </div>
                </div>

            </div>

            {openModal && (
                <Reserve hotelId={id} setOpenModal={setOpenModal} />
            )}

        </div>
    )
}

export default SingleProduct