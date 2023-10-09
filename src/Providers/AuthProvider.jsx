import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./Firebase/FirebaseConfig";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [jsonData, setJsonData] = useState({})
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);
    const [userCurrentPath, setUserCurrentPath] = useState(null)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const setUserLocation = (userPath) =>{
        setUserCurrentPath(userPath)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    useEffect(() => {
        fetch("/main.json") // Assuming "main.json" is in the public folder
            .then((res) => res.json())
            .then((data) => setJsonData(data[0]))
            .catch((error) => {
                console.error(error);
            });
    }, []);
    const { blogs, clientSay } = jsonData;
    const authInfo = {
        blogs,
        clientSay,
        createUser,
        userLogin,
        googleLogin,
        logOut,
        user,
        loading,
        userCurrentPath,
        setUserLocation,
        githubLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;