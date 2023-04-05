import api from "../../api/axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function AdminAuth() {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    console.log("token =>", adminToken);
    let headers = { Authorization: adminToken };

    api
      .get(`/admin/admin-auth`, { headers })
      .then((response) => {
        console.log("after auth", response);
        if (response.data.authorization) {
          console.log("auth success");
          setAdmin(true);
        } else {
          console.log("auth failed");
          setAdmin(false);
          navigate("/admin");
        }
      })
      .catch(() => {
        console.log("inside catch block of auth component");

        setAdmin(false);
        navigate("/admin");
      });
  }, []);

  return admin && <Outlet />;
}

export default AdminAuth;
