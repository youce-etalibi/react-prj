import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home(){
    const dispatch = useDispatch();
    const products = useSelector(state => state.product);
    // console.log(products);
    function ShowProduct(){
        if(products){
            return(
                products.map((product)=>(
                    <div key={product.id} class="card" style={{width: "18rem"}}>
                        <Link to={`/detail/${product.id}`}>
                            <img class="card-img-top" src={`${URL.createObjectURL(product.img)}`} alt="Card image cap" />
                        </Link>
                        <div class="card-body">
                        <h5 class="card-title">{product.title}</h5>
                        <p class="card-text">Price : {product.price}</p>
                        <a href="#" class="btn btn-primary">Ajoute Panier</a>
                        </div>
                    </div>
                ))
            )
        }
    }
    return(
        <Fragment>
            <br/>
            <div style={{width:'80%', margin:'auto'}}>
                <h1>List Product</h1>
                <Link to='/addProduct'>
                    <button className="btn btn-success">Ajoute Product</button>
                </Link>
            <br/>
            <br/>
                <div style={{display:'flex', gap:'20px'}}>
                    {ShowProduct()}
                </div>
            </div>
        </Fragment>
    )
}