import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Details from '../Details/Details';

const FoodDetails = () => {
    const { foodId } = useParams()
    const [foods, setFood] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(data => setFood(data.meals))
    }, [foodId])
    return (
        <div>
            <Row xs={1} md={1} className="g-3 w-25 mt-3 mx-auto">
                {foods.map(food => <Details food={food}></Details>)}
            </Row>
        </div>
    );
};

export default FoodDetails;