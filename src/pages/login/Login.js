import React from 'react';
import LoginForm from '../../components/loginForm/LoginForm';

import Header from '../../components/header/Header';
import './login.css';


export default function Login() {  

    return (
        
        <div>
            <div className="login_page_loginButton">
            <Header />
            </div>
          <div className="login_page_loginForm">
         <LoginForm />
         </div>       
     
        </div>
         
    );
}
