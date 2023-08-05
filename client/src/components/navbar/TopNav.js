import React, { useContext, useEffect, useState } from 'react'
import './topnav.css';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Logo from '../../utils/airbnb.png';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch.js';
import axios from 'axios';
import { authContext } from '../../context/authContext';

const TopNav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [city, setCity] = useState([]);
    const { user } = useContext(authContext);
    const navigate = useNavigate();



    const handleSearch = async () => {
        const { data } = await axios.get(`/api/v1/hotel/city?cities=${city}`);
        // console.log(data);
    };
    useEffect(() => {
        handleSearch();
    }, [city]);


    return (
        <div className='Nav-container'>
            <div className='nav-wrapper'>
                <div onClick={() => navigate('/')}>
                    <img src={Logo} />
                </div>
                <div className='nav-search'>
                    <input type='text' placeholder='search option' onChange={(e) => setCity(e.target.value)} />
                    <span className='search-icon' onClick={handleSearch}><SearchOutlinedIcon /></span>
                </div>
                <div className='right-nav'>
                    <p>Book your home</p>
                    <div className='right-nav-icons'>
                        <LanguageIcon />
                        <div className='right-auth-icons' onClick={() => setShowMenu(!showMenu)


                        }>
                            <MenuIcon />
                            <AccountCircleOutlinedIcon />

                        </div>
                        {
                            showMenu && (
                                <>
                                    <div className='nav-menu'>

                                        <span>sign up</span>
                                        <span onClick={() => navigate('/login')}> log in</span>

                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>

            </div>
        </div >
    )
}

export default TopNav