import React, { createContext, useEffect, useState } from "react";
import { app } from "../../Firebase.config";
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
const Auth = getAuth(app);

const Context = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		// setLoading = true
		return createUserWithEmailAndPassword(Auth, email, password);
	};

	const SignIN = (email, pass) => {
        return signInWithEmailAndPassword(Auth , email , pass)
	};

	const profile = (displayName, PhotoUrl) => {
		return updateProfile(Auth.currentUser, {
			displayName: displayName,
			photoURL: PhotoUrl,
		});
	};

	const provider = new GoogleAuthProvider();

	const GoogleSignIn = () => {
		return signInWithPopup(Auth, provider);
	};

	const logOut = () => {
		return signOut(Auth);
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(Auth, (CurrentUser) => {
			setUser(CurrentUser);
			console.log(CurrentUser);
			setLoading(false);
			// setLoading(false)
		});
		return () => unSubscribe();
	}, []);

	const obj = {
		user,
		loading,
		SignIN,
		createUser,
		profile,
		GoogleSignIn,
		logOut,
	};

	return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>;
};

export default Context;
