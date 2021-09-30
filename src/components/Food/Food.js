import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Food = (props) => {
    const { idMeal, strMeal, strMealThumb } = props.food;
    const history = useHistory()
    const handleClick = () => {
        history.push(`/food/${idMeal}`)
    }
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                </Card.Body>
                <Button className="button" onClick={handleClick}>See Details</Button>
            </Card>
        </Col>
    );
};

export default Food;