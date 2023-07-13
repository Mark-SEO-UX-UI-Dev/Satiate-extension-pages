import React, { useState } from 'react';
import axios from 'axios';

function OrderProcessing() {
  const [selectedOption, setSelectedOption] = useState('delivery');
  const [location, setLocation] = useState('');
  const [minutes, setMinutes] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleLocationSearch = () => {

    setMinutes('Searching...');

    axios
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyCP7tHz5yQhrCpWQjqJ1SdkbOIMnjMLgJo`)
      .then((response) => {
        if (response.data.status === 'OK') {
          const estimatedTime = calculateEstimatedDeliveryTime(response.data.results[0]);
          setMinutes(estimatedTime);
        } else {
          setMinutes('Error');
        }
      })
      .catch((error) => {
        console.error(error);
        setMinutes('Error');
      });
  };

  const calculateEstimatedDeliveryTime = (geocodeData) => {
    return 30;
  };

  const handlePlaceOrder = () => {
  };

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <button
                className={`nav-link ${selectedOption === 'delivery' ? 'active' : ''}`}
                onClick={() => handleOptionChange('delivery')}
              >
                Delivery
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${selectedOption === 'pickup' ? 'active' : ''}`}
                onClick={() => handleOptionChange('pickup')}
              >
                Pickup
              </button>
            </li>
          </ul>
        </div>
        <div className="card-body">
          {selectedOption === 'delivery' && (
            <div>
              <p>Your order from [Restaurant Name]</p>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Item 1</td>
                    <td>$10.00</td>
                  </tr>
                  <tr>
                    <td>Item 2</td>
                    <td>$15.00</td>
                  </tr>
                </tbody>
              </table>
              <div>
              </div>
              <div>
                <p>Subtotal: $25.00</p>
                <p>Delivery Fee: $5.00</p>
                <p>Total: $30.00</p>
                <button className="btn btn-primary" onClick={handlePlaceOrder}>
                  Go to checkout
                </button>
              </div>
            </div>
          )}
          {selectedOption === 'pickup' && (
            <div>
            </div>
          )}
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <i className="bi bi-motor-icon"></i>
            <p>Estimated delivery time: {minutes} minutes</p>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
          <div className="form-group">
          </div>
          <button className="btn btn-primary" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderProcessing;
