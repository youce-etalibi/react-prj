
import React from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { ajoute, supprime } from './Action';
import { Link } from "react-router-dom";
export default function ListProduct() {
  const products = [
        {
        id: 1,
        title: 'PC Portable Gamer HP VICTUS',
        price:'7490 DH',
        thumbnail : 'a1.jpeg'
        },
        {
        id: 2,
        title: 'PC Portable Gamer HP VICTUS',
        price:'2190 DH',
        thumbnail : 'a2.jpeg'
        },
        {
        id: 3,
        title: 'Pc Portable Chromebook Acer',
        price:'3640 DH',
        thumbnail: 'a3.jpeg'
        },
        {
        id: 4,
        title: 'PC Portable - HUAWEI - xA2-Ak',
        price:'1270 DH',
        thumbnail: 'a4.jpeg'}
  ];

  const object = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(ajoute(product));
  };

  const handleDelete = (productId) => {
    dispatch(supprime(productId));
  };

  return (
    <center>
        <div>
            <Link to = '/add'>
      <button
        
        style={{
            backgroundColor: 'green',
            color: 'white',
          border: 'none',
          fontFamily: 'verdana',
          fontWeight: '600',
          borderRadius: '10px',
          padding: '5px',
          margin: '10px',
        }}>Ajoute Produit</button>
            </Link>
        </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {object.products.map((item) => (
          <div
            key={item.id}
            style={{
              width: '170px',
              height: '250px',
              boxShadow: 'white 0px 0px 100px 10px',
            }}
          >
            <Product
              title={item.title}
              price={item.price}
              img={`picturs_of_pc/${item.thumbnail}`}
            />
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </center>
  );
}