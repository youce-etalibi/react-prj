import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail(){
    const home = useNavigate();

    const {id} = useParams();
    const products = useSelector(state => state.product)
    const Product = products.filter((item)=>item.id == id);

    function showDetail(){
        if(Product){
            return(
                Product.map((p)=>(
                    <div style={{display:'flex', borderRadius:'10px', backgroundColor:'yellow', justifyContent:'center', alignItems :'center', width:'fit-content', padding:'10px'}}>
                        <div>
                            <img style={{borderRadius:'10px', width:'300px', height:'300px', objectFit:'cover'}} src={URL.createObjectURL(p.img)} />
                        </div>
                        <div style={{width:"300px", height:'300px', backgroundColor:'yellow'}}>
                            <h1>{p.title}</h1>
                            <h1>{p.price}</h1>
                        </div>
                    </div>
                ))
            )
        }
    }

    function GoBack(e){
        e.preventDefault();
        home('/');
    }

    return(
        <Fragment>
            <center>
                <br/>
                <button onClick={GoBack} className="btn btn-outline-warning">Go back</button>
                <br/>
                <br/>
                {showDetail()}
            </center>
        </Fragment>
    )
}