import React, { useEffect, useState } from "react";
import HomeMain from "../../../components/user-components/home-components/home-main/HomeMain";
import PopularHotels from "../../../components/user-components/home-components/Popular-Hotels/PopularHotels";
import Footer from "../../../components/user-components/partials/footer/Footer";
import Navbar from "../../../components/user-components/partials/header/Navbar";

import api from "../../../api/axios";

function Home() {
  const [hotels, setHotels] = useState([])
  const getData = async () => {
    try {
      const response = await api.post(
        `/user/get-user-info`,
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
   useEffect(()=>{
      console.log("inside useEffect")
      api.get('/admin/get-hotel-data').then(result => {
        setHotels(result.data)
        console.log(result.data,"----")
      })
     


    },[])

    console.log(hotels,"state")
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
