import { BsTelephone } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Contact = () => {
    useEffect(()=>{
        AOS.init({duration:"1000"})
    },[])

    return (
        <div id="contact" className="w-11/12 mx-auto pb-10 my-5 mt-14">
            <h3 className="text-[#fd4520] text-2xl font-bold text-center mt-8 m-4 uppercase"  data-aos="fade-left">Contact</h3>
            <div className="flex flex-col lg:flex-row justify-between mt-10">
                <div className="lg:w-1/2 pr-5"  data-aos="fade-right">
                    <h1 className="text-[40px] md:text-4xl 2xl:text-6xl text-[#fd4520] font-semibold mb-3">Wedding Management</h1>
                    <p className="text-gray-500 pb-5 text-justify">Let's make your special day unforgettable! Contact us to discuss your dream wedding. Our team is dedicated to creating magical moments and turning your vision into reality. Reach out today, and let's start planning the wedding of your dreams.</p>
                    <div className="space-y-3">
                        <div className="text-xl flex items-center">
                            <BsTelephone className="text-4xl mr-3"></BsTelephone> +8001568880000
                        </div>
                        <div className="text-xl flex items-center">
                            <CgMail className="text-4xl mr-3"></CgMail> wedding@management.com
                        </div>
                        <div className="text-xl flex items-center">
                            <CiLocationOn className="text-4xl mr-3"></CiLocationOn> Dhaka-1216, Bangladesh
                        </div>
                    </div>

                </div>
                <form className="lg:w-1/2"  data-aos="fade-left">
                    <input className="border border-[#fd5420] w-full py-2 pl-2 my-1 text-xl bg-white text-[#0a0a0a] rounded-lg" type="text" name="name" placeholder="Your Name" /><br />
                    <input className="border border-[#fd5420] w-full py-2 pl-2 my-1 text-xl bg-white text-[#000] rounded-lg" type="email" name="email" placeholder="Your Email" /><br />
                    <input className="border border-[#fd5420] w-full py-2 pl-2 my-1 text-xl bg-white text-[#000] rounded-lg" type="text" name="subject" placeholder="Subject" /><br />
                    <textarea className="border border-[#fd5420] w-full py-2 pl-2 my-1 text-xl bg-white text-[#000] rounded-lg" id="" cols="" rows="5" name="message" placeholder="Your Message"></textarea>
                    <button className="border border-[#fd4520] py-2 px-4 text-xl text-[#fd4520] hover:text-[#fff] hover:bg-[#fd4520] font-semibold rounded-lg" type="submit">Sent Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
