import React from 'react';
// import food from "../images/food.jpg";
import rating from "../images/rating.png";

type RestaurantProp = {
    restaurantsList: any[]
}

const TopRated = (props: RestaurantProp) => {
    return (
        <>
            <div className='flex overflow-scroll no-swiggy-scrollbar'>
                {props?.restaurantsList?.filter((data:any)=> data.ranking_position < 6).map((data: any, index: number) => (
                    <div key={index} className="max-w-sm rounded mt-6 ml-8">
                        {/* <img className="w-72 h-44 rounded-2xl" src={food} alt="Food" /> */}
                        <img className="w-52 rounded-2xl h-36" src={data?.photo?.images?.original?.url} alt="Food" />
                        <div className="px-4 py-2">
                            <div className="font-semibold text-xl text-gray-800">
                                {data?.name?.length > 10 ? `${data?.name.slice(0, 10)}...` : data?.name}
                            </div>
                            <div className='flex items-center'>
                                <img className="w-5 h-5 rounded-full ml-1" src={rating} alt="Rating" />
                                <div className="font-semibold text-lg text-gray-800">{data?.rating}</div>
                            </div>
                            <p className="text-gray-500 text-base">
                                {data?.cuisine?.length ? `${data?.cuisine[0]?.name}, ${data?.cuisine[1]?.name}` : 'Cuisine not available'}
                            </p>
                            <p className="text-gray-500 text-base">
                                {data?.address_obj?.city ?? 'City not available'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default TopRated;
