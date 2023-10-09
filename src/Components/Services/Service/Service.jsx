/* eslint-disable react/prop-types */


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const Service = ({item}) => {
    useEffect(()=>{
        AOS.init({duration:"1000"})
    },[])
    
    const {id, subtitle, description, cost} = item
    return (
        
        <div className='bg-slate-50 hover:bg-[#fd4520] hover:text-white text-center border space-x-3 p-5 rounded-lg' data-aos="fade-up">
            <h1 className='text-5xl font-semibold'>{cost}</h1>
            <h1 className='text-3xl my-3 font-medium'>{subtitle}</h1>
            <p>{description?.slice(0,80)}...</p>
            <Link to={`/services/${id}`}>
            <button className="text-[#fd4520] mt-5 text-xl font-semibold rounded-lg bg-slate-100 py-2 px-4">See Details</button>
            </Link>
        </div> 
        
    );
};

export default Service;