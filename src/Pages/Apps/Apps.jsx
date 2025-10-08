import React from 'react';
import di from '../../assets/icon-downloads.png';
import ri from '../../assets/icon-ratings.png';
import { Link } from 'react-router';

const Apps = ({ app }) => {

    const {id, image, downloads, ratingAvg, title } = app
    //console.log(ratingAvg);
    return (

        <Link to={`/appdetails/${id}`}>
        <div className="w-[348px] h-[435px] flex flex-col items-start gap-4 p-4 bg-white rounded-xl">
            {/* Image */}
            <div className="w-[250px] h-[300px] bg-gray-100 rounded-xl flex items-center justify-center">
                <img src={image} alt={title} className="h-full object-cover rounded-xl p-10" />
            </div>

            {/* App Title */}
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

            {/* Downloads & Rating */}
            <div className="flex w-full gap-15 items-center mt-auto">
                {/* Downloads */}
                <div className="flex items-center gap-1 bg-green-100 text-green-600 px-2 py-1 rounded-lg text-sm font-medium">
                    <img src={di} alt="" className='h-[20px]' />
                    <h1>{downloads}</h1>
                </div>
                {/* Ratings */}

                <div className="flex items-center gap-1 bg-green-100 text-green-600 px-2 py-1 rounded-lg text-sm font-medium">
                    <img src={ri} alt="" className='h-[20px]' />
                    <h1>{ratingAvg}</h1>
                </div>
            </div>
        </div>
        </Link>

    );
};

export default Apps;