import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProduits } from "./Redux/Actions";

export default function Detail(){
    const home = useNavigate();
    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(()=>(
        fetch('https://fakestoreapi.com/products')
        .then(reponse => reponse.json())
        .then(data => dispatch(fetchProduits(data)))
        ), [])
        
    const ListProduct = useSelector(state => state.ListProducts);
    // console.log(ListProduct)
    const produit = ListProduct.find((item) => item.id == id)
    console.log(produit)


    function ShowDetailProduit(){
        if(produit){
            return(
                <div style={{display:'flex', flexDirection:'row', backgroundColor:'#fffddf', width:'600px', height:'400px', borderRadius:'10px'}}>
                    <div style={{width:'300px', height:'200px', borderRadius:'10px'}}>
                        <img style={{width:'100%', height:'400px', objectFit:'cover', borderRadius:'10px'}} src="https://st3.depositphotos.com/9747634/32010/i/450/depositphotos_320104748-stock-photo-hangers-with-different-clothes-in.jpg"/>
                    </div>
                    <div style={{width:'300px', height:'200px', borderRadius:'10px', color:'black', fontFamily:'verdana', padding:'10px'}}>
                        <h3 style={{ fontWeight:'bold'}}>{produit.title}</h3>
                        <h5 style={{ fontWeight:'bold', color:'white', backgroundColor:'#6efb61', width:'fit-content', padding:'5px', borderRadius:'15px'}}>{produit.price}$</h5>
                        <h5 style={{ fontWeight:'bold', backgroundColor:'#00b3ff', color:'white',  padding:'5px', borderRadius:'15px'}}>{produit.category}</h5>
                        <p style={{fontSize:'10px'}}>{produit.description}</p>
                        <button style={{ fontWeight:'bold', backgroundColor:'#fc0000', width:'fit-content', padding:'5px', borderRadius:'10px', border:'2px solid white', color:'white'}}>Add To Cart</button>
                    </div>
                </div>  
            )
        }
    }
    return (
        <Fragment>
                <button onClick={()=>(home('/'))} style={{
                    backgroundColor:'red',
                    color:'white',
                    fontFamily :'verdana',
                    fontWeight:'bold',
                    padding:'4px',
                    border:'none',
                    outline:'none',
                    borderRadius:'5px',
                    position:'relative',
                    top:'140px',
                    left:'440px'

                }}>Go Back</button>
                <div style={{height:'100vh', display : 'flex', justifyContent:'center', alignItems:'center'}}>
                {ShowDetailProduit()}
                </div>
            
        </Fragment>
    )
}