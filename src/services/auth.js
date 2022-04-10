import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import store from "../store";

export const signUp = ({ firstName, lastName, email, password }, onSuccess, onFailure) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
                displayName: firstName + " " + lastName, 
              })
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // Check if error code is auth/email-already-exists
            let msg
            console.log (error.code)
            if (error.code === "auth/email-already-in-use") {
                msg = "Email Already Exists"
            }
            else {
                msg = "Unable to sign up"
            }
            //if yes, then display email already exists
            //otherwise, display unable to sign up
            if (onFailure) {
                onFailure(msg)
            }
        });
}

export const signIn = ({ email, password }, onSuccess, onFailure) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("userSignedInSuccessfully", user)
            store.user.set({fullName: user.displayName, email: user.email, emailVerified: user.emailVerified, isAuthenticated:true})
            if (onSuccess) {
                onSuccess()
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("userDidNotSignInSuccessfully")// ..
            if (onFailure) {
                onFailure("Invalid email or password")
            }

        });
}

export const resetPassword = ({ email }, onSuccess, onFailure) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log("passwordResetEmailSent")
            // Password reset email sent!
            if (onSuccess) {
                onSuccess()
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (onFailure) {
                onFailure("Invalid Email")
            }
        });
}
