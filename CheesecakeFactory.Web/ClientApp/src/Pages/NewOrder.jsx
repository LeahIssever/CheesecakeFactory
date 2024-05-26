import React, {useState} from "react";
import LivePreview from "../components/LivePreview";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseFlavors = [
    'Choose...',
    'Classic', 
    'Chocolate',
    'Red Velvet',
    'Brownie'
]

const toppings = [
    'Caramel Drizzle', 
    'Whipped Cream', 
    'Pecans', 
    'Toasted Coconut', 
    'Graham Cracker Crumble', 
    'Powdered Sugar', 
    'White Chocolate Shavings',
    'Almonds',
    'Cookie Dough',
    'Mint Chocolate Chip',
    'Caramelized Bananas', 
    'Rainbow Sprinkles', 
    'Peanut Butter Drizzle', 
    'Dark Chocolate Drizzle'
]

const NewOrder = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedBaseFlavor, setSelectedBaseFlavor] = useState(baseFlavors[0]);
    const [selectedtoppings, setSelectedToppings] = useState([]);
    const [specialRequests, setSpecialRequests] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [deliveryDate, setDeliveryDate] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onCheckBoxChange = (topping) => {
        if(selectedtoppings.includes(topping)) {
            setSelectedToppings(selectedtoppings.filter(t => t !== topping))
        }
        else {
            setSelectedToppings([...selectedtoppings, topping]);
        }
    };

    const calculatePrice = () => {
        console.log("hello");
        if(selectedBaseFlavor === baseFlavors[0]){
            console.log("no flavor selected");
            return 0;
        }
        const calculatedPrice = (49.99 + (selectedtoppings.length * 3.95)) * quantity
        console.log(calculatedPrice);
        return calculatedPrice;
    };

    const onSubmitClick = async () => {
            await axios.post("/api/cheesecakefactory/addorder", {
            name, 
            email,
            baseFlavor: selectedBaseFlavor,
            toppings: selectedtoppings.join(', '),
            specialRequests,
            quantity,
            deliveryDate,
        });
        console.log(`submitted price: ${price}`);
        navigate("/orderconfirmation");
    };

    const isFormValid = !!name && !!email && selectedBaseFlavor !== selectedBaseFlavor[0] && +selectedtoppings.length > 0 && !!deliveryDate;

    return (
        <>
            <div className="container" style={{margintop: 80}}>
                <h1 className="text-center my-4">Cheesecake Factory Order Form</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" onChange={e => setName(e.target.value)} value={name} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} value={email} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Cheesecake Base Flavor ($49.99)</label>
                            <select className="form-select" onChange={e => setSelectedBaseFlavor(e.target.value)} value={selectedBaseFlavor}>
                                {baseFlavors.map(f => <option key={f}>{f}</option>)}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Toppings (each topping adds an additional $3.95)</label>
                            {toppings.map(t => {
                                return <div key={t} className="form-check">
                                    <input className="form-check-input" type="checkbox" onChange={() => onCheckBoxChange(t)} checked={selectedtoppings.includes(t)} />
                                    <label className="form-check-label">{t}</label>
                                </div>
                            })}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Special Requests</label>
                            <textarea className="form-control" rows="3" onChange={e => setSpecialRequests(e.target.value)} value={specialRequests}></textarea>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Quantity</label>
                            <input type="number" className="form-control" onChange={e => setQuantity(e.target.value)} value={quantity} min="1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Delivery Date</label>
                            <input type="date" className="form-control" onChange={e => setDeliveryDate(e.target.value)} value={deliveryDate} />
                        </div>
                        <button type="submit" disabled={!isFormValid} onClick={onSubmitClick} className="btn btn-primary">Submit Order</button>
                    </div>
                    <LivePreview baseFlavor={selectedBaseFlavor} 
                    toppings={selectedtoppings} 
                    specialRequests={specialRequests} 
                    quantity={quantity} 
                    deliveryDate={deliveryDate} 
                    price={calculatePrice()}
                    />
                </div>
            </div>
        </>
    );
};

export default NewOrder;