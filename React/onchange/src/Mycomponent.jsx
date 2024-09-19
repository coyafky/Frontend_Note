import React, { useState } from 'react';

function Mycomponent() {
  const [name, setName] = useState('Guest');

  const [quantity, setQuantity] = useState(1);

  const [comment, setComment] = useState();

  const [payment, setPayment] = useState();

  const [shipping, setShipping] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommonChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />

      <p>Name:{name}</p>

      <input value={quantity} onChange={handleQuantityChange} />
      <p>Quantity:{quantity}</p>

      <textarea
        value={comment}
        onChange={handleCommonChange}
        placeholder="Enter the delivery instructions"
      ></textarea>
      <p>Comment:{comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Setlect an options</option>
        <option value="visa">Visa</option>
        <option value="Mastecard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>

      <p>payment :{payment}</p>

      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === 'Pick Up'}
          onChange={handleShippingChange}
        />
      </label>

      <label>
        <br />
      </label>

      <label>
        <input
          type="radio "
          value="Delivery"
          checked={shipping === 'Delivery'}
          onChange={handleShippingChange}
        />
      </label>

      <p>Shipping:{shipping}</p>
    </div>
  );
}

export default Mycomponent;
