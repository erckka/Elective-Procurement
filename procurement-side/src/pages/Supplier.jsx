import React from 'react';
import NavBarMobile from '../components/Nav/NavBarMobile';
import NavBar from '../components/Nav/NavBar';
import Heading from '../components/Header/supplierheading';

const Supplier = () => {
  return (
    <div>
      <NavBar />
      <NavBarMobile  />
      <Heading />
    </div>
  );
};

export default Supplier;
