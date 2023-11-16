import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header1';
import ListStagiaire from './ListStagiaire';
import AddStagiaire from './AddStagiaire';
import Stagiaire from './Stagiaire';

const App = () => (
  <Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header/><ListStagiaire /></>} />
        <Route path="/add" element={<AddStagiaire />} />
        <Route path="/:nom" element={<Stagiaire />} />
      </Routes>
    </BrowserRouter>
  </Fragment>
);

export default App;