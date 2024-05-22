import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import food from "../images/food.jpg";
// import swiggy from "../images/swiggy.png";
import delisaa from "../images/delisaa-white-logo.jpg";
import Login from './Login';
import Signup from './Signup';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/setup';
import Location from './Location';

const Welcome = () => {
    const [loginModal, setLoginModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);
    const [location, setLocation] = useState("");
    console.log(location)

    return (<>
        <div className='flex'>
            <div className='h-screen w-9/12 p-10'>
                <div className='flex items-center'>
                    {auth?.currentUser?.phoneNumber ? <Link to="/main"><img src={delisaa} className='w-48 h-14' alt="Delisaa logo" /></Link> : <img src={delisaa} className='w-48 h-14' alt="Delisaa logo" />}
                    {/* <img src={swiggy} className='w-48 h-14' alt="Swiggy logo"/> */}
                    <h1 className='font-semibold ml-60 cursor-pointer' onClick={() => setLoginModal(true)}>Login</h1>
                    <button className='w-28 bg-black text-white font-bold p-3 ml-7 cursor-pointer' onClick={() => setSignupModal(true)}>Sign up</button>
                </div>
                <Fade>
                    <h1 className='font-bold text-4xl text-grey-800 mt-20'>Cooking gone wrong?</h1>
                </Fade>
                <h1 className='text-2xl text-zinc-600 mt-3'>Order food from your favourite restaurants near you.</h1>
                {/* <input className='border border-black p-4 mt-12 w-8/12' placeholder="Enter your delivery location" /> */}
                <select onChange={(e) => setLocation(e.target.value)} className='border border-black p-4 mt-12 w-8/12'>
                    <option disabled>Select a location</option>
                    <option value="297701">Bandung</option>
                    <option value="297702">Ubud</option>
                    <option value="297703">Jayapura</option>
                    <option value="297704">Timika</option>
                    <option value="297705">Bekasi</option>
                    <option value="297706">Bogor</option>
                    <option value="297707">Cirebon</option>
                    <option value="297709">Borobudur</option>
                    <option value="297719">Makassar</option>
                </select>
                <Link to="/main" state={{data:location}}><button className='bg-orange-500 text-white font-bold p-4 w-36'>Find food</button></Link>
                <h1 className='text-zinc-400 text-sm mt-8'>POPULAR CITIES IN INDIA</h1>
                <h1 className='text-zinc-700 font-bold mt-4'>Ahmedabad Bengaluru Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai Pune & more</h1>
            </div>
            <img src={food} className='h-screen w-5/12' alt="Food" />
            {loginModal && <Login setLoginModal={setLoginModal} />}
            {signupModal && <Signup setSignupModal={setSignupModal} />}
        </div>
        <Location />
    </>
    );
};

export default Welcome;
