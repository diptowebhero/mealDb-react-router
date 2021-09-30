import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Details = (props) => {
    const {idMeal,strMeal,strMealThumb,strInstructions} = props.food;
    return (
        <Col>
        <Card className="h-100 p-2">
            <Card.Img variant="top" src={strMealThumb} />
            <Card.Body>
                <Card.Title>{strMeal}</Card.Title>
                <Card.Title>Id: {idMeal}</Card.Title>
                <Card.Text>
                    {strInstructions.slice(0,100)}
                </Card.Text>
            </Card.Body>
            <Link to="/restrurants">
                <button className="button">See Food</button>
            </Link>
        </Card>
    </Col>
    );
};

export default Details;