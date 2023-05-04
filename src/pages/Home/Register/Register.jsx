import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext)
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
    const [accepted,setAccepted] = useState(false)
    const handleRegister =(event)=>{
        event.preventDefault();
        setSuccess('');
        setError('')
        const form = event.target;
        const name =form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length < 6){
            setError('please at least 6 characters in your password')
            return;
        }
        // console.log(name,photo,email,password)
        createUser(email,password)
        .then(result=>{
            const createdUser = result.user;
            console.log(createdUser)
            setError('');
            event.target.reset();
            setSuccess('user has been created successfully');

        })
        .catch(error=>{
            console.log(error);
            setError(error.message);
          
        })
    }
    const handleAccepted = (event) =>{
        setAccepted(event.target.checked);
    }
    return (
        <Container className='w-50 mx-auto'>
            <h3 className='mb-3'> Please Register !!!!!</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
               
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Your Photo URL" required />
               
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
               
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted} type="checkbox" name='accept' 
                    label={<>Accept<Link to="/terms">Terms And Conditions</Link> </>} />
                </Form.Group>
                <Button disabled ={!accepted} variant="primary" type="submit">
                   Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                  Already Have An Account ? <Link to="/login">Login</Link>
               </Form.Text>
                <Form.Text className="text-primary">
                <p className='text-primary fw-bold'>{success}</p>
               </Form.Text>
                <Form.Text className="text-danger">
                   <p className='text-danger fw-bold'>{error}</p>
               </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;