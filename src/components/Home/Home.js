import React from "react";
import Details from "../Details/Details";

import Footer from "../Footer/Footer";
import Teachers from "../Teachers/Teachers";
import Banner from "./../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
    <Details></Details>
      <Teachers></Teachers>
     <Footer></Footer>
    </div>
  );
};

export default Home;
