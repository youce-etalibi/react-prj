import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduits } from "./Redux/Actions";
import { Link } from "react-router-dom";

export default function ListProduct(){
    const dispatch = useDispatch();
    useEffect(()=>(
        fetch('https://fakestoreapi.com/products')
        .then(reponse => reponse.json())
        .then(data => dispatch(fetchProduits(data)))
    ), [])

    const ListProduct = useSelector(state => state.ListProducts);
    console.log(ListProduct)

    function showListProduct(){
        if(ListProduct){
            return(
                ListProduct.map((produit)=>(
                    <div class="card" key={produit.id} style={{width: '18rem', height:'375px'}}>
                        <Link to={`detail/${produit.id}`}>
                            <img class="card-img-top" src="https://st3.depositphotos.com/9747634/32010/i/450/depositphotos_320104748-stock-photo-hangers-with-different-clothes-in.jpg" alt="Card image cap" />
                        </Link>
                    <div class="card-body">
                    <h6 class="card-title">{produit.title}</h6>
                    <p class="card-text">{produit.price}$</p>
                    <button className="btn btn-warning"><span class="badge badge-light">{produit.category}</span></button>
                </div>
                </div>
                ))
                
            )
        }
    }

    


    



    return(
        <Fragment>
            <div className="container-fluid">
                <div className="nav bg-light p-2">
                    <h2>FakeShop</h2>
                </div>
                <div className="listProduct" style={{display : 'flex', flexWrap:"wrap", gap:"10px", justifyContent:'center', alignItems:"center"}}>
                    {showListProduct()}
                    <br/>
                    <br/>
                </div>
            </div>
        </Fragment>
    )
}