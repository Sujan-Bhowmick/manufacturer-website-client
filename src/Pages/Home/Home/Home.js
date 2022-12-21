import React from 'react';
import Product from '../../Products/Product/Product';
import Products from '../../Products/Products/Products';
import Footer from '../../Shared/Footer/Footer';

import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Products></Products>
           <Footer></Footer>
        </div>
    );
};

export default Home;