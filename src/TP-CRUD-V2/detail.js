import React, { Fragment, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Stg } from "./data";
export default function Detail(){
    const home = useNavigate();
    const id = useParams().id;
    const [stg, setStg] = useState(Stg.find((item)=>item.id == id))
    function handleBack(e){
        e.preventDefault();
        home('/')
    }
    return(
        <Fragment>
            <button onClick={handleBack} className="btnGoBack-detail"><i class="fa fa-arrow-circle-left"></i></button>
            <div className="bodyDetail">
                <div className="Cover">
                    <img className="img-cover" src={`/Covers/${stg.cover}`}/>
                </div>
                <img className="Profil-img" src={`/Profiles/${stg.profil}`}/>
                <h1 className="name-profil">{stg.fullName}</h1>
                <h5 className="headline">{stg.headline}</h5>
                <p className="hashstags">Sujets de prédilection : {stg.hashtags}</p>
                <h6 className="localisation">{stg.locatlisation}</h6>
                <button className="centre">🏫 {stg.centre}</button>
                <p className="description">
                    <h5>Infos : </h5>
                    {stg.desciption}
                </p>
                <button className="a-btn">Posts</button>
                <button className="a-btn">Activite</button>
                <button className="a-btn">Commentes</button>

            </div>
        </Fragment>
    )
}