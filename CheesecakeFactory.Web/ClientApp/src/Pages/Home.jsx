import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
   
    return (
        <>
        <div className="app-container" style={{margintop: 80}}>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{height: 100, backgroundcolor: '#eee'}}>
                <div className="text-center">
                    <h1 className="display-4">Welcome to the Cheesecake Factory</h1>
                    <p className="lead">
                        <a href="/neworder">
                            <button className="btn btn-dark btn-lg">Click here to order your own custom cheesecake</button>
                        </a>
                    </p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;