
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";

const Service = ({item}) => {
    const {id, subtitle, description, services, cost} = item
    return (
        <div className="space-y-3 text-center shadow-lg hover:shadow-2xl px-3 py-6 my-5 hover:bg-[#fd4520] hover:text-white rounded-lg border">
            <h2 className=" text-4xl font-bold">{cost}</h2>
            <h3 className="text-3xl font-semibold">{subtitle}</h3>
            <p className="">{description.slice(0,80)}...</p>
            <ul>
                {
                    services?.map((service, idx) => 
                    <li key={idx} className="flex items-center mb-2">
                        <AiOutlineCheck className="bg-[#fd452031] text-[#fd4520] mr-1.5 text-2xl p-1 rounded-[50%] font-bold"></AiOutlineCheck>{service}
                    </li>
                    )
                }
            </ul>
            <Link to={`/services/${id}`}>
            <button className="text-[#fd4520] text-xl font-semibold rounded-lg bg-slate-100 py-2 px-4">See Details</button>
            </Link>
        </div>
    );
};

export default Service;