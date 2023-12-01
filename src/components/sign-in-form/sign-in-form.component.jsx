import { useState } from 'react';

import { 
    signInWithEmailPassword,     
    signInWithGooglePopup, 
    createUserDocumentFromAuth,  } from '../../utils/firebase/firebase.utils';

import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
}


const SignInForm = () => {


    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields

   const resetFormFields = () => {
    setFormFields(defaultFormFields)
   }

   const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const {user} = await signInWithEmailPassword(email, password);
            alert("yess")
            resetFormFields()
        }catch(error){
            console.log(error)
            if(error.code === 'auth/invalid-credential'){
                alert("email or password are not valid please try again")
            } else {
                console.log(error)
            }
            resetFormFields()
        };

   };

    const handelChange = (event) => {
        const { name, value } = event.target

        setFormFields({...formFields, [name]: value})
    };

    // Sign in with Google popup
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    };
// End Popup

    return (
        <div className='sign-in-form-container'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form  onSubmit={handleSubmit}>
                <FormInput    
                    label="email"
                    inputOptions={{
                        name:"email",
                        value: email,
                        type:"email",
                        onChange: handelChange,
                        required: true
                    }}/>

                <FormInput 
                    label="password"
                    inputOptions={{
                        name:"password",
                        value: password,
                        type:"password",
                        onChange: handelChange,
                        required: true
                    }}
                />

                <div className="buttons-container">
                    <Button type="submit">SIGN IN</Button>
                    <Button type="button" buttonType='google' onClick={logGoogleUser}>GOOGLE SIGN IN</Button>
                </div>
            </form>
        </div>
    )
};

export default SignInForm;