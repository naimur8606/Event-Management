

const Banner = () => {
    return (
        <div className="h-[40vh] md:h-[80vh] bg-[url('https://i.ibb.co/sq89Tt3/jd.jpg')]  w-11/12 mx-auto bg-center bg-cover bg-blend-overlay bg-[#000] bg-opacity-40 flex justify-center items-center rounded">
            <div className="md:w-[80%] p-3 md:p-0">
                <h3 className="text-[#fa6446] text-sm md:text-xl 2xl:text-3xl">Your Perfect Wedding Awaits</h3>
                <h2 className="text-[#fff] text-3xl md:text-6xl 2xl:text-8xl font-semibold md:mt-6 md:mb-4">Celebrate Love's Journey</h2>
                <p className="lg:w-[85%] text-gray-300 text-xs md:text-base 2xl:text-2xl">Discover the magic of your dream wedding with us. From enchanting venues to expert planning, we create moments that last a lifetime. Let love shine on your special day.</p>
            </div>
        </div>
    );
};

export default Banner;