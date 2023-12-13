import { Common } from './helper/common';
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';

  export class LoginService   {
    
    private url: any;
    
    public authenticate = async (data) => {
      try {
        this.url = Common.baseUrl + '/ERP/Auth/Login';
        
        const response = await fetch(this.url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const user = await response.json();
        if (user && user.token) {
          // set user and token
          localStorage.setItem('token', user.token);
          localStorage.setItem('username', user.username);
          localStorage.setItem('userId', user.userId);
          localStorage.setItem('empId', user.empId);
          localStorage.setItem('userGroup', user.userGroup);
        }
        // Handle successful login
      } catch (error) {
        return error;
      }
    };
  
   
    public logout =()=> {
        // remove user data from local storage for log out
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        localStorage.removeItem('empId');
        localStorage.removeItem('userGroup');
        localStorage.removeItem('userMenuData');
        if(!localStorage.getItem('token')){
        // navigate('/login');
        }
      }

  
  }
  
 