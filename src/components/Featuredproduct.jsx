import React from 'react';
import "../index.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import airpod1 from "../datas/imgcarousal/airpod1.avif";
import homepod1 from "../datas/imgcarousal/homepod1.jpg";
import watch1 from "../datas/imgcarousal/watch1.webp"

const FeaturedProduct = () => {
  return (
    <>
    <div style={{width:"80%",margin:"0 auto"}}>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={airpod1} />
        <Card.Body>
          <Card.Title>Apple’s new headphones worth the £549 price</Card.Title>
          <Card.Text>
          Launched 15 December 2020, we review the Apple Airpods Max on sound quality, design just clicked
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 30 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={homepod1} height='300px'/>
        <Card.Body>
          <Card.Title>Home pod</Card.Title>
          <Card.Text>
            Published at 5 hours ago only best offer is there just clicked the image
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 2 hours ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={watch1} height='300px' />
        <Card.Body>
          <Card.Title>Smart Watch</Card.Title>
          <Card.Text>
          Dr Trust USA Healthpal 2 Smart Watch with 1.7" HD Display, Calling Feature, 24*7 Heart Rate Monitor, Spo2 Monitoring fitness tracker, Sports Modes, Multiple Watch Faces, Fast Charge, Long battery life, for Men & Women
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 hours ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
    </>
  )
}

export default FeaturedProduct