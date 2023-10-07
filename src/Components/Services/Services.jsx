import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Service from "./Service/Service";
import ServicesMap from "./ServicesMap/ServicesMap";

const Services = () => {
    const { blogs } = useContext(AuthContext)
    const allServices = blogs ? blogs.slice(0, 6) : [];
    return (
        <div className="">
            <ServicesMap allServices={allServices}></ServicesMap>
        </div>
    );
};

export default Services;