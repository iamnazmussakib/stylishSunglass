import firebaseInitialize from '../pages/Login/firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
firebaseInitialize();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // const handleGoogle = (location, history) => {
    //     signInWithPopup(auth, googleProvider)
    //         .then((result) => {
    //             console.log(result)
    //             // saveToDb(result.user.email, result.user.displayName, 'PUT')
    //             const states = location?.state?.from || '/';
    //             history.push(states);
    //             setError('');
    //         })
    //         .catch((error) => {
    //             const errorMessage = error.message;
    //             setError(errorMessage);
    //         })
    //         .finally(() => setIsLoading(false));
    // }
    const registerToWeb = (email, password, history, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const newUser = { email, displayName: name }
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                // saveToDb(email, name, 'POST');
                console.log(result);
                history.push('/')
                setError('');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }

    const loginToWeb = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const states = location?.state?.from || '/';
                history.push(states);
                setError('');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                // getIdToken(user)
                //     .then(idToken => { console.log(idToken); setToken(idToken) });
            } else {
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unsubscribe;
    }, [])

    // useEffect(() => {
    //     fetch(`http://localhost:5000/users/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setAdmin(data.admin));
    // }, [user.email])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(result => { })
            .catch(error => { })
            .finally(() => setIsLoading(false));
    }
    // const saveToDb = (email, displayName, method) => {
    //     const user = { email, displayName }
    //     fetch('http://localhost:5000/users', {
    //         method: method,
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then()

    // }


    return {
        admin,
        user,
        error,
        isLoading,
        token,
        // handleGoogle,
        registerToWeb,
        loginToWeb,
        logOut


    }
}

export default useFirebase;