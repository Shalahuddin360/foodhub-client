import React, { useEffect, useState } from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import banner from "../../../assets/banner.jpg"
import foodPic1 from "../../../assets/slider-1.jpg"
import foodPic2 from "../../../assets/slider-2.jpg"
import foodPic3 from "../../../assets/slider-3.jpg"
import ChefCard from '../../Shared/ChefCard/ChefCard';
import service from '../../../assets/service.jpg'
import images from '../../../assets/images.jpeg'
const Home = () => {

    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('https://the-foodhub-server-shalahuddin360.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])
    return (

        <Container className=' '>
            <Row className='mb-4'>
                <Col>
                    <Card className="bg-dark text-white">
                        <Card.Img src={banner} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Food Hub  Ready For Online Order</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Card.Text>
                                <h2>Best Selling And Trusted site ???</h2>
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>


                </Col>
            </Row>

            <Row xs={1} md={2} lg={2}>
                <Col lg={4}>

                <Card.Img src={service} alt="Card image" />
                <Card.Img src={images} alt="Card image" />

                </Col>
                <Col lg={8}>
                 
                   <div className='fw-semibold'>
                   <h2>Traditional Service</h2>
                     <p>1.Our service boys are responsible for taking orders from customers, serving food and beverages, clearing tables, and ensuring that the restaurant is clean and well-maintained.</p>
                     <p>2.Tips: In Indian restaurants, it is common for customers to leave a tip for the food service boy, usually around 10-15% of the bill. These tips are an important source of income for food service boys, and they are often shared with other members of the restaurant staff.</p>
                     <p>3.Tips: In Indian restaurants, it is common for customers to leave a tip for the food service boy, usually around 10-15% of the bill. These tips are an important source of income for food service boys, and they are often shared with other members of the restaurant staff.</p>
                   </div>
                    
                    <div className='fw-semibold'>
                    <h2>Vip Service</h2>
                        <p>1.Our service boys are responsible for taking orders from customers, serving food and beverages, clearing tables, and ensuring that the restaurant is clean and well-maintained.</p>

                        <p>2.Uniform: In Our restaurant, food service boys wear traditional Indian attire, such as a kurta-pajama, while in others they may wear a uniform that identifies them as part of the restaurant staff.</p>
                    </div>
                </Col>
            </Row>

            <Row className='mb-4 mt-4'>
                <Col>
                    <h2 className='text-center'> Online Order For Food Details</h2>
                    <p className='fw-bold text-center'>Delicious, Fresh, and Authentic Indian Cuisine</p>

                    <p className='text-center fw-bold text-dark'>Our service boys are responsible for taking orders from customers, serving food and beverages, clearing tables, and ensuring that the restaurant is clean and well-maintained.</p>
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={foodPic1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5 className='fw-bold text-white'> Foo Hub Menu 1 </h5>
                                <p className='fw-bold text-white'>Delicious, Fresh, and Authentic Indian Cuisine</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={foodPic2}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h5 className='fw-bold text-white'> Foo Hub Menu 2 </h5>
                                <p className='fw-bold text-white'>Delicious, Fresh, and Authentic Indian Cuisine</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={foodPic3}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h5 className='fw-bold text-white'> Foo Hub Menu 3 </h5>
                                <p className='fw-bold text-white'>Delicious, Fresh, and Authentic Indian Cuisine</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </Col>
            </Row>
            <Container>
                <h2 className='text-center'>The Simply Recipes Team</h2>
                <p className='text-center'>Simply Recipes is a trusted resource for home cooks with more than 3,000 tested recipes, guides, and meal plans, drawing over 15 million readers each month from around the world. We’re supported by a group of recipe developers, food writers, recipe and product testers, photographers, and other creative professionals.</p>
                <Row xs={1} md={2} lg={3} className='g-4'>

                    {
                        chefs.map(chef => <ChefCard
                            key={chef.chef_id}
                            chef={chef}

                        ></ChefCard>)
                    }
                </Row>
            </Container>
        </Container>

    );
};

export default Home;