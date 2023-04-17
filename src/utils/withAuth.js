import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../utils/cookies";

function withAuth(Component) {
  return function WithAuth(props) {
    const navigate = useNavigate();

    useEffect(() => {
      if (!getCookie("username")) navigate("/login");
    }, []);

    return getCookie("username") ? <Component {...props} /> : null;
  };
}

export default withAuth;
