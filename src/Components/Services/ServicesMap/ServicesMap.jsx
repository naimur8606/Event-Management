import React from 'react';
import Service from '../Service/Service';
import { Link } from 'react-router-dom';

const ServicesMap = ({ allServices }) => {
    return (
        <div className='w-11/12 mx-auto '>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center my-10 text-[#fd4520]">{allServices.length === 3 ? "Our Services" : "All Service For You"} </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

                {
                    allServices?.map(item => <Service key={item.id} item={item}></Service>)
                }
            </div>
            <div className='flex justify-center'>
                {allServices.length === 6 && <Link to={"/services"} className="btn text-[22px] font-medium my-3 text-white bg-[#fd4520] hover:text-[#fd4520]">See All Packages</Link>}
            </div>
        </div>
    );
};

export default ServicesMap;