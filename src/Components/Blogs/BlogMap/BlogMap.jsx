import Blog from "./Blog/Blog";

const BlogMap = ({ allBlogs }) => {
    const Explore = allBlogs.length
    return (
        <div className="w-11/12 mx-auto">
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center my-10 text-[#fd4520]">{Explore < 3 ? "" : "Album Of Our Weddings..."}</h3>
            <div className="grid gap-5 mb-5">
                {
                    allBlogs?.map(blog => <Blog key={blog?.id} blog={blog} Explore={Explore}></Blog>)
                }
            </div>
        </div>
    );
};

export default BlogMap;