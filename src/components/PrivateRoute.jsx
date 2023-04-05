import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import api from "../api/axios";

function PrivateRoute() {
  const navigate = useNavigate();
  const [userCheck, setUserCheck] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    let headers = { Authorization: token };

    api
      .get(`/user/authenticate`, { headers })
      .then((response) => {
        if (response.data.authorization) {
          setUserCheck(true);
        } else {
          setUserCheck(false);
          navigate("/login");
        }
      })
      .catch(() => {
        setUserCheck(false);
        navigate("/login");
      });
  }, []);

  return userCheck && <Outlet />;
}

export default PrivateRoute;
