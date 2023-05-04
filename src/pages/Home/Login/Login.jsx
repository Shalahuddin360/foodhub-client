import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
    const handleLogin =(event)=>{
        event.preventDefault()
        const form = event.target;
        const email =form.email.value;
        const password =form.password.value;
        // validation 
        setError('');
        setSuccess('');
        if(password.length < 6){
           return setError('please at least 6 characters in your password')
        }
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            event.target.reset();
            setSuccess('user login in successfully');
            setError('');
        })
        .catch(error=>{
            console.log(error);
            setError(error.message);
        })
        // console.log(email,password)
    }
    
    return (
        <Container className='w-50 mx-auto'>
            <h3 className='mb-3'> Please Login !!!!!</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
               
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary fw-bold">
                 Don't Have An Account ? <Link to="/register">Register</Link>
               </Form.Text>
                <Form.Text className="text-primary">
                <p className='text-primary fw-bold' >{success}</p>
               </Form.Text>
                <Form.Text className="text-danger">
                  <p className='text-danger fw-bold' >{error}</p>
               </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;