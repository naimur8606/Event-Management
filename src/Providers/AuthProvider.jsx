import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [jsonData, setJsonData] = useState({})
    useEffect(() => {
        fetch("/main.json") // Assuming "main.json" is in the public folder
            .then((res) => res.json())
            .then((data) => setJsonData(data[0]))
            .catch((error) => {
                console.error(error);
            });
    }, []);
    const {blogs, clientSay} = jsonData;
const authInfo = {
    blogs,
    clientSay
}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;