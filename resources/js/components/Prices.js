import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listActions } from '../store/actions/PriceActions';

export default function Prices() {
    const dispatch = useDispatch();
    const prices = useSelector(state => state.prices);

    useEffect(() => {
        dispatch(listActions());
    }, [dispatch]);
console.log(prices)
    return (

        <div>

            {prices && (
                <ul>
                    {prices.map(price => (
                        <li key={price.id}>{price.last_price}</li>
                    ))}
                </ul>
            )}

        </div>
    );
}

