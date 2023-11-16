import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./Redux/Action";
import { useNavigate } from "react-router-dom";

export default function AddProduct(){

    const dispatch = useDispatch();

    const home = useNavigate();

    const [id, setId] = useState(); 
    const [title, setTitle] = useState(); 
    const [price, setPrice] = useState(); 
    const [img, setImg] = useState(); 

    function handleSubmit(e){
        e.preventDefault()
        const productX = {
            id : id, 
            title : title,
            price : price,
            img : img
        }

        dispatch(addProduct(productX))
        home('/');
    }

    return(
        <Fragment>
            <center>
            <div>
                <h1>Add product</h1>
                <form onSubmit={handleSubmit}>
                    <table className="table table-bordered w-25">
                        <tbody>
                            <tr>
                                <td>ID : </td>
                                <td>
                                    <input type="text" onChange={e=>setId(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>TITLE : </td>
                                <td>
                                    <input type="text" onChange={e=>setTitle(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>PRICE : </td>
                                <td>
                                    <input type="text" onChange={e=>setPrice(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>IMAGE : </td>
                                <td>
                                    <input type="file" onChange={e=>setImg(e.target.files[0])}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan='2'>
                                    <input type="submit" value='ADD PRODCUT' className="btn btn-primary"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
            </center>
        </Fragment>
    )
}