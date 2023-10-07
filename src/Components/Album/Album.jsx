import { AuthContext } from "../../Providers/AuthProvider";
import BlogMap from "./BlogMap/BlogMap";
import { useContext } from "react";

const Album = () => {
    const { blogs } = useContext(AuthContext)
    const allBlogs= blogs;
    return (
        <div>
            <BlogMap allBlogs={allBlogs}></BlogMap>
        </div>
    );
};

export default Album;