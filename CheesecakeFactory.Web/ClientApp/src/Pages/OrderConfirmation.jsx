import React from "react";

const OrderConfirmation = () => {
    return (
        <div className="container" style={{margintop: 80}}>
            <div className="d-flex align-items-center justify-content-center" style={{height: 100}}>
                <div className="text-center">
                    <h1 className="display-4">Your order has been submitted.</h1>
                    <p className="lead">You will receive a confirmation email shortly. Thank you and enjoy!</p>
                </div>
            </div>
        </div>
    );
}

export default OrderConfirmation;