import { useContext } from "react";
import Banner from "./Banner/Banner";
import { AuthContext } from "../../Providers/AuthProvider";
import BlogMap from "../Album/BlogMap/BlogMap";
import ServicesMap from "../Services/ServicesMap/ServicesMap";
import HappyClient from "./HappyClient/HappyClient";
import Contact from "../Contact/Contact";

const Home = () => {
    const { blogs} = useContext(AuthContext);
    const allBlogs = blogs ? blogs.slice(2, 3) : []; // Check if blogs is defined
    const allServices = blogs ? blogs.slice(0, 3) : [];
    
    return (
        <div>
            <Banner />
            <BlogMap allBlogs={allBlogs} />
            <ServicesMap className="w-11/12 mx-auto" allServices={allServices}></ServicesMap>
            <HappyClient></HappyClient>
            <Contact></Contact>
        </div>
    );
};

export default Home;
