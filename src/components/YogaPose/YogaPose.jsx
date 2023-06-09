import { useEffect, useState } from "react";
import { useParams } from "react-router";
import  Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";
import React from "react";

function YogaPose() {

    console.log("rendered")

    const {yogaID} = useParams();
    console.log(yogaID);
    const [singleData, setSingleData] = useState([]);
  
    useEffect(() => { 
        
        const getSingleMovies = async () => {
            try {
                const response = await axios.get(`https://fitness-app-server-xh2v.onrender.com/api/specific-yoga-pose/${yogaID}`);

                console.log(response);

                setSingleData([response.data]);

                console.log([response.data]);
    
            } catch (error) {
                console.error(error);
            }
        }

        getSingleMovies();

    }, [yogaID]);

    return (
        <div>
            <Container  fluid style={{padding:"5%", background:"pink"}}>
                <Row style={{textAlign:"center"}}>
                    {singleData.map((yoga, index) => {
                        return (
                            <Col id={yoga._id} key={index} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                                <iframe className="yoga-demo-video" src={`https://www.youtube.com/embed/${yoga.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                <Card>
                                    <Card.Img variant="top" src={yoga.imgUrl} />
                                    <Card.Body>
                                    <Card.Title>{yoga.posename}</Card.Title>
                                    <Card.Text>{yoga.duration}</Card.Text>
                                    <Card.Text>{yoga.relexationTime}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )                   
                    })}
                </Row>
            </Container>
        </div>
    );
}


export default YogaPose;

