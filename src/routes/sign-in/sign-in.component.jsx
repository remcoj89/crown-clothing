import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
} from '../../utils/firebase/firebase.utils'

import SignUnForm  from '../../components/sign-up-form/sign-up-form.component';
import Button from '../../components/button/button.component'

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
                <Button buttonType='google' onClick={logGoogleUser}> Sign in With Google</Button>
                <Button buttonType='default'>Sign In With Email</Button>
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