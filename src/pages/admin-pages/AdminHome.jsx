import React, { useEffect } from "react";

import Layout from "../../components/admin-components/Layout";
import api from "../../api/axios";

function AdminHome() {
  // const getData = async () => {
  //   try {
  //     const response = await api.post(
  //       "/user/get-user-info-by-id",
  //       {},
  //       {
  //         headers: {
  //           Authorization: "Bearer " + localStorage.getItem("token"),
  //         },
  //       }
  //     );
  //     console.log(response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <Layout>
      <h1>Dashboard</h1>
    </Layout>
  );
}

export default AdminHome;
