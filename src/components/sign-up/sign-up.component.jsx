import React, { Component } from 'react';
import './sign-up.styles.scss';
import {auth, createUserProfileDocument} from '../firebase/firebase.util';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';


class SignUp extends Component {
    state = { 
        displayName: '',
        email: '',
        password:'', 
        confirmPassword:''
     }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("passwords do not match");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            
            await createUserProfileDocument(user, displayName);
            this.setState({
                displayName: '',
                email: '',
                password:'', 
                confirmPassword:''
            })


        }catch(error){
            console.log(error);
        }

    };
    handleChange = event =>{
        const {name, value } = event.target;

        this.setState({
            [name]:value
        });
    };
    render() { 
        const { displayName, email, password, confirmPassword} = this.state;
        return ( 
            <div className="sign-up">
                <h2 className="title">
                    I don't have an account
                </h2>
                <span>Sign up with your email and password.</span>
                <form onSubmit={this.handleSubmit} className="sign-up-forms" >
                    <FormInput type="text" name="displayName" value={displayName}  onChange={this.handleChange}  label='Name' required />
                    <FormInput type="email" name="email" value={email} onChange={this.handleChange} label='Email' required />
                    <FormInput type="password" name="password" value={password} onChange={this.handleChange} label='Password' required />
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
         );
    }
}
 
export default SignUp;