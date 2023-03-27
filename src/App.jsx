import React from 'react';
import Banner from './Banner/Banner';
import Header from './Header/Header';
import Loaddata from './LoadData/Loaddata';
import Products from './Product/Products';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Loaddata></Loaddata>
    </div>
  );
};

export default App;