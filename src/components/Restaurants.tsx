import React from 'react';
import rating from "../images/rating.png";
import { Link } from 'react-router-dom';

type restaurantProp = {
    restaurantsList: any;
    menu: any;
}

const Restaurants: React.FC<restaurantProp> = ({ restaurantsList, menu }) => {
    return (
        <div className='grid grid-cols-4 w-11/12'>
            {restaurantsList?.filter((data: any) => 
                data?.cuisine[0]?.name.includes(menu) || 
                data?.cuisine[1]?.name.includes(menu) || 
                data?.cuisine[2]?.name.includes(menu)
            ).map((data: any, index: number) => (
                <Link to="/details" state={{ data }} key={index}>
                    <div className="max-w-sm overflow-hidden mt-4">
                        <img className="w-52 rounded-2xl h-36" src={data?.photo?.images?.original?.url} alt="Food" />
                        <div className="px-4 py-2">
                            <div className="font-semibold text-xl text-gray-800">
                                {data?.name?.slice(0, 10)}...
                            </div>
                            <div className='flex items-center'>
                                <img className="w-5 h-5 rounded-full ml-1" src={rating} alt="rating" />
                                <div className="font-semibold text-lg text-gray-800">
                                    {data?.rating}
                                </div>
                            </div>
                            <p className="text-gray-500 text-base">
                                {data?.cuisine[0]?.name}, {data?.cuisine[1]?.name}
                            </p>
                            <p className="text-gray-500 text-base">
                                {data?.address_obj?.city}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Restaurants;
