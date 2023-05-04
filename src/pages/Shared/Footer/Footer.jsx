import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container> 
                  <div className='bg-black bg-opacity-75 text-white p-4'>
                <div className='d-lg-flex justify-content-between align-items-start mt-5 g-5'>
                    <div className='w-100'>
                        <h2 className='mb-3'>Good Food Good Health</h2>
                        <p className='mb-3'>Delicious, Fresh, and Authentic Indian Cuisine</p>
                        <p className=''><small>Indulge in the rich and diverse culinary traditions of India at <span>"Lunch To Dinner"</span>. Our chefs use only the freshest ingredients and authentic spices to create dishes that will transport your taste buds to the vibrant streets of India. From creamy curries to smoky tandoori dishes, we offer a wide range of options that will satisfy any appetite. Come and experience the warmth and hospitality of India at <span>"Lunch To Dinner"</span>.</small></p>
                    </div>
                    <div className='w-100 me-5'>
                    <h4 className='ps-lg-5 ms-lg-5' >Food Hub Website </h4>
                        <h2 className='ps-lg-5 ms-lg-5 text-warning'>Contct Us </h2>
                        <p className='ps-lg-5 ms-lg-5'>Facebook </p>
                        <p className='ps-lg-5 ms-lg-5'>Twitter </p>
                        <p className='ps-lg-5 ms-lg-5'>Instagram </p>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Footer;