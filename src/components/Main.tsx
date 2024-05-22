import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Menu from './Menu';
import Restaurants from './Restaurants';
import Footer from './Footer';
import TopRated from './TopRated';
import Offers from './Offers';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main: React.FC = () => {
  const location = useLocation();
  const [restaurantsList, setRestaurantsList] = useState<any[]>([]);
  const [menu, setMenu] = useState("");

  useEffect(() => {
    const getRestaurants = async () => {
      const url = 'https://restaurants222.p.rapidapi.com/search';
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'dc433de940msh800cd0c20761eb0p1d995ejsnb8afc29fe7b6',
          'X-RapidAPI-Host': 'restaurants222.p.rapidapi.com'
        },
        body: new URLSearchParams({
          location_id: `${location ? location?.state?.data : "297701"}`,
          language: 'en_US',
          currency: 'USD',
          offset: '0'
        })
      };

      try {
        const response = await fetch(url, options);
        const list = await response.json();
        setRestaurantsList(list.results.data);  // Update state with fetched data
      } catch (err) {
        console.error(err);
        const error: any = err;
        toast.error(error);
      }
    };

    getRestaurants();
  }, [location]);  // Include location in the dependency array

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div>
        <Navbar restaurantsList={restaurantsList} />
        <div className='ml-44 w-8/12'>
          <h1 className='mt-7 font-bold text-2xl'>Best offers for you</h1>
          <Offers />
          <h1 className='mt-7 font-bold text-2xl'>Top restaurant chains in {restaurantsList ? restaurantsList[0]?.address_obj?.city : "Location"}</h1>
          <Menu setMenu={setMenu} />
          <h1 className='mt-7 font-bold text-2xl'>What's on your mind</h1>
          <TopRated restaurantsList={restaurantsList} />
          <div className='ml-44'>
            <h1 className='mt-7 font-bold text-2xl'>Restaurants with online food delivery in {restaurantsList ? restaurantsList[0]?.address_obj?.city : "Location"}</h1>
            <Restaurants menu={menu} restaurantsList={restaurantsList} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;
