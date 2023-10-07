import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useParams } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";

const ServiceDetails = () => {
    const { blogs } = useContext(AuthContext);
    const [view, setView] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const clicked = blogs?.find(item => item.id == id);
        setView(clicked);
    }, [id, blogs]);

    return (
        <div className="w-11/12 mx-auto md:space-y-3 mb-5">
            <div className="relative">
                <img className="lg:h-[85vh] w-full rounded-lg" src={view?.img} alt="" />
                <div className="absolute bottom-8">
                    <h4 className="px-5 bg-[#fd452043] lg:space-y-2 lg:text-2xl text-[#fff]">
                        <p>Cost: {view?.cost}</p>
                        <p>Provider: {view?.provider}</p>
                    </h4>
                </div>
            </div>
            <h3 className="text-[#fd4520] text-2xl font-medium">{view?.subtitle}</h3>
            <h2 className="text-4xl font-semibold">{view?.title}</h2>
            <ul>
                <span className="text-2xl font-semibold pb-3">Services:</span>
                {
                    view?.services?.map((service, idx) =>
                        <li key={idx} className="flex items-center mb-2">
                            <AiOutlineCheck className="bg-[#fd452031] text-[#fd4520] mr-1.5 text-2xl p-1 rounded-[50%] font-bold"></AiOutlineCheck>{service}
                        </li>
                    )
                }
            </ul>
            <p className="text-[#686770]"><span className="font-bold">Description: </span>{view?.description}</p>
        </div>
    );
};

export default ServiceDetails;
