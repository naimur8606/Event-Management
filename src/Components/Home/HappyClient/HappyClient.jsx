import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const HappyClient = () => {
    const { clientSay } = useContext(AuthContext);
    console.log(clientSay)
    return (
        <div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center my-10 text-[#fd4520]"> Client Say </h2>
            <div>
                {
                    clientSay?.map(client =>
                        <div key={client?.id}>
                            <img src="" alt="" />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default HappyClient;