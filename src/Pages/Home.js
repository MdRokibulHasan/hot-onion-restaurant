import Button from '@restart/ui/esm/Button';
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import Services from '../Components/Services/Services';
import './Home.css';


const Home = () => {
    return (
        <div>
            <div className="container top-banner">
                <div className="text-input mt-3 ">
                    <div >
                        <h1>Bset Food Waiting For Your Belly</h1>
                    </div>
                    <div>
                        <InputGroup className="mb-3 w-75">
                            <FormControl
                                placeholder=""
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                Search
                            </Button>
                        </InputGroup>
                    </div>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;