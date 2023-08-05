import React, { useState } from 'react'
import './reserve.css';
import useFetch from '../hooks/useFetch.js';


const Reserve = ({ hotelId, setOpenModal }) => {
    const [selectedRooms, setSelectedRooms] = useState([]);

    const { data } = useFetch(`/api/v1/hotel/room/${hotelId}`);


    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(
            checked ? [...selectedRooms, value] : selectedRooms.filter((items) => items !== value)
        );

    }
    console.log(selectedRooms);
    return (
        <div className='reserve-container'>
            <span>select your rooms</span>
            {data.map((item) => (
                <div className='rInfo' key={item._id}>
                    <div className='rTitle'>{item.title}</div>
                    <div className='rDesc'>{item.desc}</div>
                    <div className='rMax'>max People:{item.maxPeople}</div>
                    {
                        item.roomNumbers.map((roomnumber) => (
                            <div className='room'>
                                <label>{roomnumber.number}</label>
                                <input type='checkbox' value={roomnumber._id} onChange={handleSelect} />
                            </div>
                        ))
                    }
                </div>
            ))}
        </div>
    )
}

export default Reserve