import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
//import { add} from '../../utilities/calculate';
//import add from '../../utilities/calculate';


const Cosmetics = () => {
    // const first = 55; 
    // const second = 45;
    // const total = add(first,second)
    // data load - system 1 
    // const cosmetics = [
    //     {id:1, name: 'alta', price: 100},
    //     {id:2, name: 'malta', price: 200},
    //     {id:3, name: 'chalta', price: 300},
    //     {id:4, name: 'dalta', price: 400},
    //     {id:5, name: 'lalta', price: 500},
    // ]
    // data load - system 2 
    // const cosmetics = [
    //     {
    //       "id": "641ffcfbe407b8f2417963c8",
    //       "price": 176,
    //       "name": "Bender Parker"
    //     },
    //     {
    //       "id": "641ffcfb6675a6deab87ef7d",
    //       "price": 127,
    //       "name": "Frieda Suarez"
    //     },
    //     {
    //       "id": "641ffcfb920e2ff838e40223",
    //       "price": 59,
    //       "name": "Rosalinda Sellers"
    //     },
    //     {
    //       "id": "641ffcfb41706c9ebd64b1ba",
    //       "price": 128,
    //       "name": "Cooper Odonnell"
    //     },
    //     {
    //       "id": "641ffcfb7eef03c696a31c8a",
    //       "price": 286,
    //       "name": "Alana Cruz"
    //     },
    //     {
    //       "id": "641ffcfb72cac2c6a218df7f",
    //       "price": 308,
    //       "name": "Nadine Cleveland"
    //     }
    //   ]
    // data load - system 3 
    const [cosmetics, setCosmetics] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setCosmetics(data));
    },[])
    const total = getTotal(cosmetics);
    return (
        <div>
            <h1>Welcome to my cosmetic store</h1>
            <p>Money Need: {total}</p>
            {/* <p>Total: {total}</p> */}
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    key={cosmetic.id}
                    cosmetic = {cosmetic}
                    ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;