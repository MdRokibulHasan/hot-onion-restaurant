import React from 'react';
import './Services.css';
import Lunch from '../Lunch/Lunch';
import { Link } from 'react-router-dom';


const Services = () => {
    return (
        <div>
            <div className="btn-services mt-3">
                <Link to="/breakfast">
                    <button className="btn">Breakfast</button>
                </Link>
                <Link to="/lunch">
                    <button className="btn">Lunch</button>
                </Link>
                <Link to="/dinner">
                    <button className="btn">Dinner</button>
                </Link>
            </div>

        </div>
    );
};

export default Services;