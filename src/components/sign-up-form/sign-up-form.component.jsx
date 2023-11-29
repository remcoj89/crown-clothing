import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import './sign-up-form.styles.scss'
import { useState } from 'react';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields

   const resetFormFields = () => {
    setFormFields(defaultFormFields)
   }
   
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
        <div className="sign-up-container">
            <h1>Sign up with your email and password</h1>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                    name="displayName" 
                    value={displayName} 
                    type="text" 
                    placeholder='Fullname....' 
                    required onChange={handelChange} 
                />

                <label>Email</label>
                <input 
                    name="email" 
                    value={email} 
                    type="email" 
                    placeholder='email@example.com' 
                    required onChange={handelChange} 
                />

                <label>Password</label>
                <input 
                    name="password" 
                    value={password} 
                    type="password" 
                    required onChange={handelChange}
                />

                <label>Confirm Password</label>
                <input 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    type="password" 
                    required onChange={handelChange}
                />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
};

export default SignUpForm;