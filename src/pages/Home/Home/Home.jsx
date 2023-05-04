import React, { useEffect, useState } from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import banner from "../../../assets/banner.jpg"
import foodPic1 from "../../../assets/slider-1.jpg"
import foodPic2 from "../../../assets/slider-2.jpg"
import foodPic3 from "../../../assets/slider-3.jpg"
import ChefCard from '../../Shared/ChefCard/ChefCard';
const Home = () => {

    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('https://the-foodhub-server-shalahuddin360.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])
    return (

        <Container className=''>
            <Row className='mb-4'>
                <Col>
                    <h2 className='text-center'>Banner Details</h2>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint voluptas aut nam, dolores id necessitatibus qui molestiae perspiciatis, eaque cum dolorem. Voluptas iure perferendis, debitis molestiae veritatis dolorem alias.</p>

                    <Card className="bg-dark text-white">
                        <Card.Img src={banner} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>


                </Col>
            </Row>

            <Row className='mb-4'>
                <Col>
                    <h2 className='text-center'>Food Details</h2>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint voluptas aut nam, dolores id necessitatibus qui molestiae perspiciatis, eaque cum dolorem. Voluptas iure perferendis, debitis molestiae veritatis dolorem alias.</p>
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={foodPic1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={foodPic2}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={foodPic3}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h5>Third slide label</h5>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
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