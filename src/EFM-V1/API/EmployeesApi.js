import React, { useEffect, useState } from "react";

export default function EmpApi(){
    const [Employes, setEmployes] = useState();
    useEffect(()=>(
        fetch('http:/www.ofppt.ma/api/employes')
        .then(info = info.json())
        .then(data => setEmployes(data))
    ), [])

}