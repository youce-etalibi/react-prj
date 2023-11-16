import React, { useEffect, useReducer, useState } from "react";

const initState = {
    ListProducts: [],
};

export default function (state = initState, action){
    // const [products, setProducts] = useState();
    // useEffect(()=>(
    //     fetch('https://fakestoreapi.com/products')
    //     .then(reponse => reponse.json())
    //     .then(data => setProducts(data))
    //     ), [])

    switch (action.type) {
        case  "fetch_produits":
            return { ...state, ListProducts: action.payload };
        default:
            return state;
    }
};


