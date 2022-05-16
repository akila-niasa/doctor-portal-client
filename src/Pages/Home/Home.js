import React from 'react';
import Banner from './Banner';
import Contract from './Contract';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonial from './Testimonial';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Info/>
            <Services/>
            <Treatment/>
            <MakeAppoinment/>
            <Testimonial/>
            <Contract/>
            <Footer/>
        </div>
    );
};

export default Home;