import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import NewOrder from './Pages/NewOrder';
import OrderConfirmation from './Pages/OrderConfirmation';
import ViewOrders from './Pages/ViewOrders';
import OrderDetails from './Pages/OrderDetails';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/neworder' element={<NewOrder />} />
                <Route path='/orderconfirmation' element={<OrderConfirmation />} />
                <Route path='/vieworders' element={<ViewOrders />} />
                <Route path='/orderdetails/:id' element={<OrderDetails />} />
            </Routes>
        </Layout>
    );
}

export default App;