import React, { useEffect, useState } from 'react';
import HomeMain from '../../../components/user-components/home-components/home-main/HomeMain';
import PopularHotels from '../../../components/user-components/home-components/Popular-Hotels/PopularHotels';
import Footer from '../../../components/user-components/partials/footer/Footer';
import Navbar from '../../../components/user-components/partials/header/Navbar';

import api from '../../../api/axios';

function Home() {
  const [ setHotels] = useState([]);

  useEffect(() => {
    api.get('/admin/get-hotel-data').then((result) => {
      setHotels(result.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <HomeMain />
      <PopularHotels />
      <Footer />
    </>
  );
}

export default Home;
