import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [socialError, setSocialError] = useState('');
    const [socialSuccess, setSocialSuccess] = useState('');
    const [userLogin, setUserLogin] = useState(null)
    const location = useLocation();
    console.log('login page location', location)

    const from = location.state?.from?.pathname || '/'

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // validation 
        setError('');
        setSuccess('');
        if (password.length < 6) {
            return setError('please at least 6 characters in your password')
        }

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUserLogin(loggedUser);
                event.target.reset();
                setSuccess('user login in successfully');
                setError('');
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.log(error);
                setError(error.message);

            })
        // console.log(email,password)
    }
    const handleGoogleSignIn = () => {
        setError('');
        setSuccess('');
        signInWithGoogle()
            .then(result => {
                const googleUser = result.user;
                setUserLogin(googleUser);
                console.log(googleUser);
                setSocialSuccess('Google Sign In succesfully');
                navigate(from, { replace: true })
            })
            .catch(error => {
                setSocialError(error.message)
            })
    }
    const handleGithubSignIn = () => {
        setSocialSuccess('');
        setSocialError('');
        signInWithGithub()
            .then(result => {
                const githubUser = result.user;
                setUserLogin(githubUser);
                console.log(githubUser)
                setSocialSuccess('Google Sign In succesfully');
                setSocialError('');
                navigate(from, { replace: true })
            })
            .catch(error => {
                setSocialError(error.message)
            })
    }
    return (
        <Container className=' mx-auto  mt-4'>
            <h4 className='mb-5 fw-bold '> Please Login !!!!!</h4>
            <Form onSubmit={handleLogin} className='w-full lg-w-50 shadow-lg p-3 mb-sm-3 mb-lg-5 bg-body-tertiary rounded'>
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
            <br />
            <div className='d-lg-flex align-items-center'>
                <Button onClick={handleGoogleSignIn} variant="primary" className='fw-semibold me-4' type="submit">
                    Sign In With Google
                </Button>
                <Button onClick={handleGithubSignIn} className=' fw-semibold' variant="primary" type="submit">
                    Login with Github
                </Button>
            </div>
            <p className='text-primary fw-bold' >{socialSuccess}</p>
            <p className='text-danger fw-bold' >{socialError}</p>
        </Container>
    );
};

export default Login;