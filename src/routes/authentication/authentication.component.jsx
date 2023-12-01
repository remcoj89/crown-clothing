import SignUpForm  from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component'
import './authentication.styles.scss'

// Sign in function
const Authentication = () => {

    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
};
// End sing in

export default Authentication;