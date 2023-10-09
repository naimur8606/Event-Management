import { useState } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Blog = ({ blog, Explore }) => {
    const [seeMore, setSeeMore] = useState(false)
    useEffect(()=>{
        AOS.init({duration:"1000"})
    },[])
    return (
        <div className="border border-[#fd4520] rounded-lg p-2 lg:flex"  data-aos="fade-right">
            <img className="w-10/12 lg:w-1/2 mx-auto h-40 md:h-[53vh] lg:h-[60vh] mb-5 rounded" src={blog?.img} alt="" />
            <div className="lg:w-1/2  flex flex-col justify-center items-start pl-5">
                <div className="">
                    <div>
                        <h4 className="md:text-2xl 2xl:text-3xl font-medium text-[#fd4520]">{blog?.subtitle}</h4>
                        <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-semibold my-2">{blog?.title}</h2>
                        <div className="flex justify-between my-2 text-sm md:text-xl 2xl:text-3xl font-bold md:font-medium">
                            <p>Provider: {blog.provider}</p>
                            <span className="w-1/3 text-[#fd4520]">Cost: {blog?.cost}</span>
                        </div>
                        <p>
                            {!seeMore ? blog?.description.slice(0, 100) : blog?.description}
                            <button onClick={() => setSeeMore(!seeMore)} className="text-xl text-[#fd4520] lg:text-2xl ml-1">{seeMore ? ' see lase' : 'see more...'}</button>
                        </p>
                    </div>

                </div>
                {Explore < 3 && <Link to={"/album"} className="btn text-lg font-normal my-3 text-white bg-[#fd4520] hover:text-[#fd4520]">Explore Our Albums...</Link>}
            </div>
        </div>
    );
};

export default Blog;