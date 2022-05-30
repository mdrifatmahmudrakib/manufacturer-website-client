import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ product }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const { _id, img, name, price, quantity, minimum_quantity } =
        product;

    // useEffect(() => {
    //     fetch(`https://mighty-beach-10745.herokuapp.com/product/${paymentId}`, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',
    //             'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //         },
    //         body: JSON.stringify({ price })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data?.clientSecret) {
    //                 setClientSecret(data.clientSecret);
    //             }
    //         });

    // }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        setCardError(error?.message || '')
    }
    return (
        <div className="lg:mt-10">
            <form className="border-2 p-10" onSubmit={handleSubmit}>
                <CardElement className="border-2 p-3"
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button className="py-2 px-10 bg-primary text-white mt-10" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-500">{cardError}</p>
            }
        </div>
    );
};

export default CheckoutForm;