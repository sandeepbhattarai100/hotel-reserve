import React, { useContext, useState } from 'react'
import TopNav from '../../components/navbar/TopNav.js';
import Footer from '../../components/footer/Footer.js';


import './login.css';
import { authContext } from '../../context/authContext';
import axios from 'axios';

const Login = () => {


    const [inputs, setInputs] = useState({
        email: undefined,
        password: undefined
    });

    const { loading, error, dispatch,user } = useContext(authContext);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({
            type: 'LOGIN_START'
        });
        try {
            const res = await axios.post('api/v1/auth/login', inputs);

            dispatch({type:"LOGIN_SUCCESS", payload: res.data})
            // console.log(res.data);
            // console.log(inputs)

        } catch (error) {
            dispatch({ type: error.res })

        }

    }
    // console.log(user.user);
    return (
        <div>
            <TopNav />
            <div className='login-container'>
                <form className='form-wrapper'>
                    <div className='login-input'>
                        <input type='text' name='email' placeholder='Email Address' id='email' onChange={handleChange} />
                    </div>
                    <div className='login-input'>
                        <input type='password' name='password' placeholder='Password' id='password' onChange={handleChange} />
                    </div>
                    <div className='login-button'>
                        <button onClick={handleSubmit}>Login</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Login