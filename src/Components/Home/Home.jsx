import { useContext } from "react";
import Banner from "./Banner/Banner";
import { AuthContext } from "../../Providers/AuthProvider";
import BlogMap from "../Blogs/BlogMap/BlogMap";

const Home = () => {
    const { blogs } = useContext(AuthContext);
    const allBlogs = blogs ? blogs.slice(2, 3) : []; // Check if blogs is defined
    console.log(allBlogs);
    
    return (
        <div>
            <Banner />
            <BlogMap allBlogs={allBlogs} />
        </div>
    );
};

export default Home;
