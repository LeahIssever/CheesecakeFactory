import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";

const OrderDetails = () => {
    
    const { id } = useParams(); 

    const [order, setOrder] = useState();

    useEffect(() => {
        const getOrder = async () => {
            const {data} = await axios.get(`api/cheesecakefactory/getorderbyid?id=${id}`);
            setOrder(data);
        }
        getOrder();
    }, []);

    return (
        <div className="container" style={{margintop: 80}}>
            <div className="d-flex align-items-center justify-content-center" style={{height: 80}}>
                <div className="card text-center shadow p-3 mb-5 bg-body rounded" style={{width: 30}}>
                    <div className="card-body">
                        <h3 className="card-title fw-bold">{order.name}</h3>
                        <p className="card-text fs-5">{order.email}</p>
                        <p className="card-text fs-5">{order.baseFlavor}</p>
                        <p className="card-text fs-5">{order.toppings ? order.toppings : "N/A"}</p>
                        <p className="card-text fs-5">{order.specialRequests ? order.specialRequests : "N/A"}</p>
                        <p className="card-text fs-5">{order.quantity}</p>
                        <p className="card-text fs-5">{dayjs(order.deliveryDate).format('MM/DD/YYYY')}</p>
                        <p className="card-text fs-5">{`$${order.price}`}</p>
                    </div>
                    <Link to="/vieworders">
                        <button className="btn btn-primary w-100">Back to Orders</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails;