import React, {useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

const SignUp = () => {

    const [newUserData, setNewUserData] = useState({
        displayName: '', 
        email: '', 
        password: '', 
        confirmPassword: ''});

        const handleSubmit = async event => {
            event.preventDefault();
            if(newUserData.password !== newUserData.confirmPassword){ 
                alert("passwords don`t match");
                return;
            }
     try {
         const {user} = await auth.createUserWithEmailAndPassword(newUserData.email, newUserData.password);
        await createUserProfileDocument(user, {displayName: newUserData.displayName});
        setNewUserData({
            displayName: '', 
            email: '', 
            password: '', 
            confirmPassword: ''});

     }catch(error){
         console.error(error);
     }   
        };

        const handleChange = (event) => {
            setNewUserData({...newUserData,[event.target.name]: event.target.value})
        };

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                type='text'
                name='displayName'
                value={newUserData.displayName}
                onChange={handleChange}
                label='Display name'
                required
                />
                <FormInput
                type='email'
                name='email'
                value={newUserData.email}
                onChange={handleChange}
                label='Email'
                required
                />
                <FormInput
                type='password'
                name='password'
                value={newUserData.password}
                onChange={handleChange}
                label='Password'
                required
                />
                <FormInput
                type='password'
                name='confirmPassword'
                value={newUserData.confirmPassword}
                onChange={handleChange}
                label='Confirm password'
                required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    );
};

export default SignUp;