import React, {useState} from 'react';


import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = (props) => {

    const [emailAndPass, setEmailAndPass] = useState({email: '', password: ''});

    const handleSubmit = event => {
        event.preventDefault();
        setEmailAndPass({email: '', password: ''});
    };

    const handleChange = event => {
    const {name, value}  = event.target;
     setEmailAndPass({...emailAndPass, [name]: value});
    }
     return (
         <div className='sign-in'>
             <h2>I already have an account</h2>
             <span>Sign in with your email and password</span>

             <form onSubmit={handleSubmit}>
                 <FormInput name='email' label='email' type='email' value={emailAndPass.email} handleChange={handleChange} required />
                 <FormInput name='password' label='password' type='password' value={emailAndPass.password} handleChange={handleChange} required />
                <div className='buttons'>
               <div><CustomButton type='submit'> Sign in </CustomButton></div>
                <div><CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign in with google </CustomButton>
                </div>
                </div>
             </form>
         </div>
     )

};

export default SignIn;