import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
const Blog = () => {
    return (
<Container>
    
      <div className="mt-5">
        <div className="row d-flex align-items-center">
          <h4 className='fw-bold fs-3 mb-5' >React Question's & Answers ?</h4>
          <div className="col-md-6">

            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header> <p className='fw-bold fs-5'>1. What is the differences between uncontrolled and controlled components? </p></Accordion.Header>
                <Accordion.Body>
               <p><b>Ans:</b>  In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header> <p className='fw-bold fs-5'>2. How to validate react props using PropsTypes?</p> </Accordion.Header>
                <Accordion.Body>
                  <p style={{ textAlign: 'justify' }}><b>Ans:</b>The propTypes can be of any data type, A Boolean, a Number , a String, a Function, an Arry.
                </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-md-6">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header><p className='fw-bold fs-5' >3. What is the differentce between nodejs and expressjs  ?</p> </Accordion.Header>
                <Accordion.Body>
                  <p style={{ textAlign: 'justify' }} > <b>Ans:</b> Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p> <br />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header> <p className='fw-bold fs-5' >4. What is a custom Hook , and why you will create a custom hook? </p> </Accordion.Header>
                <Accordion.Body>
                  
                 <p><b>Ans:</b> Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
      <h3>Here is PDF Document</h3>
      <Button variant="primary">Pdf Download</Button>
        </Container>
    );
};

export default Blog;