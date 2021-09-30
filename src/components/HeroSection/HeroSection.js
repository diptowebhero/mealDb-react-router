import React from 'react';
import { useHistory } from 'react-router';

const HeroSection = () => {
    const history = useHistory()
    const handleBtnClick = () => {
        history.push("/restrurants")
    }
    return (
        <div className="header">
            <div className="title">
                <h1>Welcome To our Restrurants</h1>
                <p>we bring professional chefs to home to prepare
                    delicious, <br /> customized meals at a fraction of the cost</p>
                <button onClick={handleBtnClick} className="button">See Our Restrurants</button>
            </div>
        </div>
    );
};

export default HeroSection;