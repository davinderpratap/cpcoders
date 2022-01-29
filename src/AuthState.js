import AuthContext from './AuthContext';
import { GoogleAuthProvider,signInWithPopup,onAuthStateChanged} from 'firebase/auth';
import {auth} from './firebase';
import {useEffect,useState} from 'react';
const AuthState=(props)=>{
    const [User,setUser] = useState("");
    const googleSignIn=()=>{
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProvider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        } 
            
    },[])
    return(
        <AuthContext.Provider value={{googleSignIn,User}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthState;