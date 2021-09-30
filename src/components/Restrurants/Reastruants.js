import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, Row } from 'react-bootstrap';
import Food from '../Food/Food';
import './Reatruants.css'
const Reastruants = () => {
    const [searchText, setSearchText] = useState('')
    const [foods, setFood] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(response => response.json())
            .then(data => setFood(data.meals))
    }, [searchText])
    const handleSearchField = event => {
        const searchTextVlue = event.target.value;
        setSearchText(searchTextVlue);
    }
    return (
        <div>
            <InputGroup className="mb-3 w-50 mx-auto mt-4">
                <FormControl onChange={handleSearchField}
                    placeholder="Search Food..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
            </InputGroup>
            <Row xs={1} md={3} className="g-2 w-100 mx-auto">
                    {foods?.map(food => <Food key={food.idMeal} food={food}></Food>)}
            </Row>
        </div>
    );
};

export default Reastruants;

