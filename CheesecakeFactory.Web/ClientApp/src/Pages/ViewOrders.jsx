import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const ViewOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const {data} = await axios.get('api/cheesecakefactory/getorders');
            setOrders(data);
        }
        getOrders();
    }, []);

    return (
        <div className="container" style={{margintop: 80}}>
            <div className="d-flex justify-content-center">
                <table className="table text-center shadow-lg" style={{borderspacing: 0, maxwidth: 80}}>
                    <thead>
                        <tr style={{borderradius: 15}}>
                            <th>Name/Email</th>
                            <th>Base Flavor</th>
                            <th>Toppings</th>
                            <th>Special Requests</th>
                            <th>Quantity</th>
                            <th>Delivery Date</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(o => (
                        <tr key={o.id} style={{backgroundColor: "#f8f9fa", borderRadius: "15px"}}>
                            <td style={{paddingtop: 15, paddingbottom: 15}}>
                                <Link to={`/orderdetails/${o.id}`}>
                                    {o.name} - {o.email}
                                </Link>
                            </td>
                            <td>{o.baseFlavor}</td>
                            <td>{o.toppings ? o.toppings : "N/A"}</td>
                            <td>{o.specialRequests ? o.specialRequests : "N/A"}</td>
                            <td>{o.quantity}</td>
                            <td>{dayjs(o.deliveryDate).format('MM/DD/YYYY')}</td>
                            <td>{`$${o.price}`}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewOrders;