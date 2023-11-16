import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className='bg-warning p-1'>
    <Link to="/" className='btn btn-primary m-1'>Liste Stagiaires</Link>
    <Link to="/add" className='btn btn-success'>Ajouter Stagiaire</Link>
  </div>
);

export default Header;