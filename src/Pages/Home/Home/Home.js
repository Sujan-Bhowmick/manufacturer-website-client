import React from 'react';
import Products from '../../Products/Products/Products';
import Footer from '../../Shared/Footer/Footer';
import GetReview from '../Add Review/GetReview';

import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Products></Products>
           <GetReview></GetReview>
           <Footer></Footer>
        </div>
    );
};

export default Home;