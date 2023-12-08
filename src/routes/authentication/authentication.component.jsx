import SignUpForm  from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component'
import {AuthenticationContainer} from './authentication.styles'

// Sign in function
const Authentication = () => {

    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    )
};
// End sing in

export default Authentication;
