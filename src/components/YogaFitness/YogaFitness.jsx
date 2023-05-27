import React, { useEffect, useState } from 'react';
import axios from "axios";
import  Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const YogaFitness = () => {

  const [yogaPose, setYogaPose]  = useState([]);

  console.log(yogaPose);

  useEffect(() => {

    const getDetails = async () => {
      
      const response = await axios.get('https://fitness-app-server-xh2v.onrender.com/api/all-yoga-pose');
      console.log(response);
      setYogaPose(response.data);
    }

    getDetails();

  }, [])

  return (
    <>
        <div>

      
        <Container fluid style={{padding:"5%", background: "pink"}}>
            <Row style={{textAlign: "center"}}>

                {yogaPose.map((yoga) => {
                return(
                <Col id={yoga._id} key = {yoga._id} xs={6} md={4} lg={3} style={{marginBottom: "2%"}}>
                    <Card style={{cursor: "pointer", height: "450px", border: "1px solid red"}}  onClick={() => window.location.href="/get-yoga-poses/" + yoga._id} >
                    <Card.Img variant="top" src={yoga.imgUrl} style={{height: "300px", width: "100%"}}/>
                    <Card.Body>
                        <Card.Title>{yoga.posename}</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                )})}
                </Row>
            </Container>

      
        </div>
    </>
  )
}

export default YogaFitness;
