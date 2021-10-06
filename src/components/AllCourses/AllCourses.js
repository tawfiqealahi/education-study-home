import React from 'react';
import AllCourseDetails from '../AllCourseDetails/AllCourseDetails';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const AllCourses = () => {
    return (
        <div>
            <Banner></Banner>
            <AllCourseDetails></AllCourseDetails>
            <Footer></Footer>
        </div>
    );
};

export default AllCourses;