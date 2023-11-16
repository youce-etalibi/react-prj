import React, { Fragment, useState } from "react";
export default function Add(){
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [img, setImg] = useState('')
    return(
        <Fragment>
            <div>
                <form>
                    <table>
                        <tr>
                            <td>id : </td>
                            <td><input type='text' onChange={e=>setId(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>title : </td>
                            <td><input type='text' onChange={e=>setTitle(e.target.value)}/></td>
                        </tr>
                    </table>
                </form>
            </div>
        </Fragment>
    )
}