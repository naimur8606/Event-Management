import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const HappyClient = () => {
    const { clientSay } = useContext(AuthContext);
    console.log(clientSay)
    return (
        <div className="w-11/12 mx-auto my-5">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center my-10 text-[#fd4520]"> Client Say </h2>
            <div className="grid md:grid-cols-3 gap-5 text-center">
                {
                    clientSay?.map(client =>
                        <div key={client?.id} className="border px-2 py-8 space-y-2 shadow-md rounded-lg">
                            <img className="rounded-[50%] h-36 w-36 mx-auto" src={client?.image} alt="" />
                            <h3 className="text-xl font-medium">Name: {client?.name} {`(${client?.title})`}</h3>
                            <p className="text-[#848199]">{client?.quote}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default HappyClient;