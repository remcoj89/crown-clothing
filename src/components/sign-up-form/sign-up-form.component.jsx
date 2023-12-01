import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import './sign-up-form.styles.scss'
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from  '../button/button.component';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
const [formFields, setFormFields] = useState(defaultFormFields);
const {displayName, email, password, confirmPassword} = formFields;

const resetFormFields = () => {
 setFormFields(defaultFormFields)
};
      
const handleSubmit = async (event) => {
    event.preventDefault();
    if(password !== confirmPassword) {
        alert("Your passwords do not match");
        return;
    }
    try {
        const {user} = await createAuthUserWithEmailAndPassword(email, password);
        await createUserDocumentFromAuth(user, {displayName})
        resetFormFields();
    } catch(error) {
        if(error.code === 'auth/email-already-in-use') {
            alert("Cannot create user account, Email already in use")
        } else {
            console.error('user creation encountered an error',error)
        }
    }
};

const handelChange = (event) => {
    const { name, value } = event.target
    setFormFields({...formFields, [name]: value})
};

return (
    <div className="sign-up-form-container">
        <h2>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
            <FormInput 
                label="Display Name"
                inputOptions={{
                    name:"displayName",
                    value: displayName,
                    type:"text",
                    onChange: handelChange,
                    required: true
                }}
            />

            <FormInput 
                label="Email"
                inputOptions={{
                    name:"email",
                    value: email,
                    type:"email",
                    onChange: handelChange,
                    required: true
                }}
            />

            <FormInput 
                label="Password"
                inputOptions={{
                  name:"password",
                  value: password,
                  type:"password",
                  onChange: handelChange,
                  required: true
                }}
            />

            <FormInput 
                label="Confirm Password"
                inputOptions={{
                    name:"confirmPassword",
                    value: confirmPassword,
                    type:"password",
                    onChange: handelChange,
                    required: true
                }}
            />

            <Button buttonType='inverted' type="submit">Sign Up</Button>
        </form>
    </div>
) 
};

export default SignUpForm;