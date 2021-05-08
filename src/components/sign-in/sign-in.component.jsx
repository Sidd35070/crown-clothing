import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import { signInWithGoogle } from '../firebase/firebase.util';

export default class SignIn extends React.Component{
    state ={
        email:'',
        password:'',
        kissed:'checking'
    }

    handleSubmit = event =>{
        event.preventDefault();

        this.setState({ email:'', password:''});
    };

    handleChange = event => {
        console.log(event.target);
        const { name, value } = event.target;
        this.setState({ [name]: value});
    };
    render(){
        return ( 
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" label="email" value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput type="password" name="password" label="password" value={this.state.password} handleChange={this.handleChange} required/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}