import React from 'react';
import { Card,  Carousel, } from 'react-bootstrap';
import "./Teachers.css"

const Teachers = () => {
    return (
        
        <div className="mx-5">
            <h1>Our Teachers</h1>
            <Carousel className="w-50  mx-auto carousel-items">
            <Carousel.Item>
    <Card.Img  className="images" variant="top" src="https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/4/2018/11/Classroom-Confidence.jpg" />
    <Card.Body>
      <Card.Title>Tawfiq</Card.Title>
      <Card.Text>
        Your Bangla Teacher
      </Card.Text>
      <p>.</p>
    </Card.Body>

  </Carousel.Item>
  <Carousel.Item>
    <Card.Img className="images" variant="top" src="http://photos.demandstudios.com/getty/article/184/252/87635886.jpg" />
    <Card.Body>
      <Card.Title>Sopnil</Card.Title>
      <Card.Text>
       Your programming Teacher
      </Card.Text>
      <p>.</p>
    </Card.Body>
   
  </Carousel.Item>
  <Carousel.Item>
    <Card.Img className="images" variant="top" src="https://www.xploretefl.com/articles/wp-content/uploads/2018/12/teacher-greenboard.jpg" />
    <Card.Body>
      <Card.Title>Razu</Card.Title>
      <Card.Text>
        Your Math Teacher
      </Card.Text>
      <p>.</p>
    </Card.Body>
    
  </Carousel.Item>
  <Carousel.Item>
    <Card.Img className="images" variant="top" src="https://media.istockphoto.com/photos/male-teacher-in-the-school-picture-id904284306?k=6&m=904284306&s=612x612&w=0&h=_tPfJckRfAapUZjr2ANqr7DW5mRmgPNH0_RApttnxc4=" />
    <Card.Body>
      <Card.Title>Asif</Card.Title>
      <Card.Text>
        Your Programming Teacher
      </Card.Text>
      <p>.</p>
    </Card.Body>
   
  </Carousel.Item>
  <Carousel.Item>
    <Card.Img className="images" variant="top" src="https://www.workingdads.co.uk/wp-content/uploads/2020/01/AdobeStock_282194469-e1578051449881.jpeg" />
    <Card.Body>
      <Card.Title>Fizan</Card.Title>
      <Card.Text>
        Your English Teacher
      </Card.Text>
      <p>.</p>
    </Card.Body>
   
  </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Teachers;