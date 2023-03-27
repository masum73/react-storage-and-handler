import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 5; 
    const second = 4;
    const result = multiply(first,second);
    const sum = add(first,second);
    return (
        <div>
            <h3>This is a shoes component</h3>
            <p>Result: {result}</p>
            <p>Sum: {sum}</p>
        </div>
    );
};

export default Shoes;