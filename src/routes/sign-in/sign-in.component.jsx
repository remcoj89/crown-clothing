import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
} from '../../utils/firebase/firebase.utils'

import SignUnForm  from '../../components/sign-up-form/sign-up-form.component';

// Sign in function
const SignIn = () => {


// Sign in with Google popup
    const logGoogleUser = async () => {
            const {user} = await signInWithGooglePopup();
            const userDocRef = await createUserDocumentFromAuth(user)
        };
// End Popup
    
    return (
        <div>
            <div>
                <h2>Sign In</h2>
                <button onClick={logGoogleUser}> 
                    Sign in With Google Popup
                </button>
            </div>
            <div>
                <h2>Sign Up</h2>
                <SignUnForm />
            </div>
        </div>
    )
};
// End sing in

export default SignIn;