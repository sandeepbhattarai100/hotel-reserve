import React from 'react'
import './home.css';
import TopNav from '../../components/navbar/TopNav';
import Products from '../../components/products/Products';
import Footer from '../../components/footer/Footer';

const Homepage = () => {
    return (
        <div >
            <TopNav />
            <div className='home-container'>
                <div className='home-wrapper'>
                    <Products />
                </div>

            </div>
            <Footer />


        </div>
    )
}

export default Homepage